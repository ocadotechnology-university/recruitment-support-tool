const fs = require('fs');
const path = require('path');
const version = 1;

let projectId = '';
let bearerToken = '';

const queryToBodyToFetchAPI = `mutation UpdateProjectData($projectId: Int!, $version: Int!, $data: JSON!) 
  {
    updateProjectData(projectId: $projectId, version: $version, data: $data) 
    {
      updatedAt
    }
  }`;

let variablesToBodyToFetchAPI = {
  "projectId": projectId,
  "version": version,
  "data": {
    "files": {
    },
    "libs": {
      "chai": {
        "name": "chai",
        "version": "4.3.7"
      },
      "jest": {
        "name": "jest",
        "version": "29.5.0"
      },
      "mocha": {
        "name": "mocha",
        "version": "10.2.0"
      },
      "module": {
        "name": "module",
        "version": "1.2.5"
      }
    },
    "assets": [],
    "layout": {
      "id": "0",
      "type": "column",
      "content": [
        {
          "id": "1",
          "parentId": "0",
          "type": "stack",
          "heightPercentage": 50,
          "widthPercentage": 100,
          "content": [
          ]
        },
        {
          "id": "2",
          "parentId": "0",
          "type": "row",
          "heightPercentage": 50,
          "widthPercentage": 100,
          "content": [
            {
              "id": "3",
              "parentId": "2",
              "type": "stack",
              "heightPercentage": 50,
              "widthPercentage": 50,
              "content": [
                {
                  "id": "console",
                  "parentId": "3",
                  "type": "component",
                  "title": "Console",
                  "vueComponent": "EditorTabConsole",
                  "active": true,
                  "focused": false
                }
              ]
            },
            {
              "id": "2",
              "parentId": "2",
              "type": "stack",
              "heightPercentage": 50,
              "widthPercentage": 50,
              "content": [
                {
                  "id": "result",
                  "parentId": "2",
                  "type": "component",
                  "title": "Website View",
                  "vueComponent": "EditorTabResult",
                  "active": true,
                  "focused": false
                }
              ]
            }
          ]
        }
      ]
    },
    "liveReloadEnabled": true
  }
}

async function generateResponse() {

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

async function readDirectoriesRecursive(currentDirectoryFileSystem, currentDirectoryDictionary) {

  const elements = fs.readdirSync(currentDirectoryFileSystem)
  for (const element of elements) {
    const newDirectoryFileSystem = path.join(currentDirectoryFileSystem, element)
    const newDirectoryToCheck = fs.statSync(newDirectoryFileSystem)
    const newDirectoryDictionary = currentDirectoryDictionary + '/' + element

    if (newDirectoryToCheck.isDirectory()) {
      readDirectoriesRecursive(newDirectoryFileSystem, newDirectoryDictionary)
    } else {
      if(element != 'model_solutions.js' && element != 'validator_test.js'){
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

  const args = process.argv.slice(1);

  bearerToken = process.env.BEARER_TOKEN;
  projectId = process.env.PROJECT_ID;
  console.log(projectId)

  variablesToBodyToFetchAPI.projectId = parseInt(projectId);

  await readDirectoriesRecursive(args[1], '')
  console.log("Number of files added to the paged: ", Object.keys(variablesToBodyToFetchAPI.data.files).length)
  await generateResponse();
}

main()
