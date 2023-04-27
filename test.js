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
      "/run.js": {
        "path": "/run.js",
        "value": "import mocha from 'mocha/mocha.js';\r\nmocha.run();\r\n",
        "isBinary": false
      },
      "/setup.js": {
        "path": "/setup.js",
        "value": "import chai from 'chai/chai.js';\r\nimport mocha from 'mocha/mocha.js';\r\n\r\nwindow.expect = chai.expect;\r\nmocha.setup('bdd');\r\n",
        "isBinary": false
      },
      "/script.js": {
        "path": "/script.js",
        "value": "function add(a, b) {\n  return a + b\n}\n\nfunction sub(a, b) {\n  return a - b\n}\n\n\nmodule.exports = {add, sub};",
        "isBinary": false
      },
      "/style.css": {
        "path": "/style.css",
        "value": "body {\n  background: transparent; /* Make it white if you need */\n  color: #fcbe24;\n  padding: 0 24px;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}",
        "isBinary": false
      },
      "/index.html": {
        "path": "/index.html",
        "value": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css\">\n  </head>\n  <body>\n    Test\n<div id=\"mocha\"></div>\n<div id=\"test\"></div>\n<script src=\"setup.js\"></script>\n    <script src=\"script.js\"></script>\n    <script src=\"script.spec.js\"></script>\n    <script src=\"run.js\"></script>\n  </body>\n</html>",
        "isBinary": false
      },
      "/package.json": {
        "path": "/package.json",
        "value": "{\n  \"dependencies\": {\n    \"chai\": \"4.3.7\",\n    \"jest\": \"29.5.0\",\n    \"mocha\": \"10.2.0\",\n    \"module\": \"1.2.5\"\n  }\n}",
        "isBinary": false
      },
      "/script.spec.js": {
        "path": "/script.spec.js",
        "value": "\r\nimport {add,sub} from '../script.js'\r\ndescribe('calculator test', function() {\r\n  it('adding two numbers', function () {\r\n  expect(add(1,2)).to.eql(3);\r\n  expect(add(3,2)).to.eql(5);\r\n  })\r\n  it('odejmowanie', function() {\r\n    expect(sub(5,3)).to.eql(2);\r\n    expect(sub(0,0)).to.eq(0);\r\n  })\r\n  it\r\n})",
        "isBinary": false
      },
      "/module/.gitkeep": {
        "path": "/module/.gitkeep",
        "value": "",
        "isBinary": false
      }
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
            {
              "id": "/index.html",
              "parentId": "1",
              "type": "component",
              "title": "index.html",
              "vueComponent": "EditorTabFile",
              "active": false,
              "focused": false
            },
            {
              "id": "/style.css",
              "parentId": "1",
              "type": "component",
              "title": "style.css",
              "vueComponent": "EditorTabFile",
              "active": false,
              "focused": false
            },
            {
              "id": "/script.js",
              "parentId": "1",
              "type": "component",
              "title": "script.js",
              "vueComponent": "EditorTabFile",
              "active": false,
              "focused": false
            },
            {
              "id": "/package.json",
              "parentId": "1",
              "type": "component",
              "title": "package.json",
              "vueComponent": "EditorTabFile",
              "active": false,
              "focused": false
            },
            {
              "id": "/script.spec.js",
              "parentId": "1",
              "type": "component",
              "title": "script.spec.js",
              "vueComponent": "EditorTabFile",
              "active": false,
              "focused": false
            },
            {
              "id": "/setup.js",
              "parentId": "1",
              "type": "component",
              "title": "setup.js",
              "vueComponent": "EditorTabFile",
              "active": false,
              "focused": false
            },
            {
              "id": "/run.js",
              "parentId": "1",
              "type": "component",
              "title": "run.js",
              "vueComponent": "EditorTabFile",
              "active": true,
              "focused": true
            }
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
      addContentOfFileToDictionary(newDirectoryFileSystem, newDirectoryDictionary)
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
