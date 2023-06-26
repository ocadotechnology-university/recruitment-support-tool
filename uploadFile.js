const fs = require('fs');
const path = require('path');
const variables = require('./variables.json');

const MODEL_SOLUTIONS_FILE_NAME = 'model_solutions.js'
const VALIDATOR_TEST_FILE_NAME = 'validator_test.js'

const queryToBodyToFetchAPI = `mutation UpdateProjectData($projectId: Int!, $version: Int!, $data: JSON!) 
  {
    updateProjectData(projectId: $projectId, version: $version, data: $data) 
    {
      updatedAt
    }
  }`;

let layoutContent = require('./layoutContent.json');
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
    console.error("Error when sending query to Playcode.io.",  err);
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
      if(element != MODEL_SOLUTIONS_FILE_NAME && element != VALIDATOR_TEST_FILE_NAME){
        addContentOfFileToDictionary(newDirectoryFileSystem, newDirectoryDictionary)
      }
    }
  }
}

async function addContentOfFileToDictionary(pathToFile, formattedPathToFile) {

  const data = fs.readFileSync(pathToFile, 'utf8')
  variablesToBodyToFetchAPI.data.files[formattedPathToFile] = { 'path': formattedPathToFile, 'value': data, 'isBinary': false }

  layoutContent.id = formattedPathToFile
  layoutContent.title = formattedPathToFile

  variablesToBodyToFetchAPI.data.layout.content.push(layoutContent)
}

async function main() {
  const args = process.argv.slice(1);
  let bearerToken = ''

  try{
    fs.statSync(args[1])
  }catch(err){
    console.error('Please enter a valid directory path')
    process.exit()
  }

  try{
    bearerToken = process.env.BEARER_TOKEN;
    variablesToBodyToFetchAPI.projectId = parseInt(process.env.PROJECT_ID)
  } catch (err) {
    console.error('Error when reading environment variables. ERROR:' + err.message)
  }

  await readDirectoriesRecursive(args[1], '')
  await generateResponse(bearerToken);
}

main()
