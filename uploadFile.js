const fs = require('fs');
const path = require('path');
const version = 1;
const variables = require('./variables.json');

const model_solutions = 'model_solutions.js'
const validator_test = 'validator_test.js'

const queryToBodyToFetchAPI = `mutation UpdateProjectData($projectId: Int!, $version: Int!, $data: JSON!) 
  {
    updateProjectData(projectId: $projectId, version: $version, data: $data) 
    {
      updatedAt
    }
  }`;

let variablesToBodyToFetchAPI = variables

async function generateResponse(bearerToken) {

  try{
    const response = await fetch(`https://playcode.io/graphql`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${bearerToken}`
      },
      body: JSON.stringify({
        query: queryToBodyToFetchAPI,
        variables: variablesToBodyToFetchAPI
      }),
    });

    const responseData = await response.json();
    console.log("response", responseData);
  }
  catch (err){
    console.log("Error when sending query to Playcode.io. ERROR: " + err.message);
  }
}

async function readDirectoriesRecursive(currentDirectoryFileSystem, currentDirectoryDictionary) {

  const elements = fs.readdirSync(currentDirectoryFileSystem)
  for (const element of elements) {
    const newDirectoryFileSystem = path.join(currentDirectoryFileSystem, element)
    const newDirectoryToCheck = fs.statSync(newDirectoryFileSystem)
    const newDirectoryDictionary = currentDirectoryDictionary + '/' + element

    if (newDirectoryToCheck.isDirectory()) {
      readDirectoriesRecursive(newDirectoryFileSystem, newDirectoryDictionary)
    } else {
      if(element != model_solutions && element != validator_test){
        addContentOfFileToDictionary(newDirectoryFileSystem, newDirectoryDictionary)
      }
    }
  }
}

async function addContentOfFileToDictionary(pathToFile, formattedPathToFile) {

  const data = fs.readFileSync(pathToFile, 'utf8')
  variablesToBodyToFetchAPI.data.files[formattedPathToFile] = { 'path': formattedPathToFile, 'value': data, 'isBinary': false }
}

async function main() {

  variablesToBodyToFetchAPI.version = version

  const args = process.argv.slice(1);

  const bearerToken = process.env.BEARER_TOKEN;
  variablesToBodyToFetchAPI.projectId = parseInt(process.env.PROJECT_ID);

  await readDirectoriesRecursive(args[1], '')
  await generateResponse(bearerToken);
}

main()
