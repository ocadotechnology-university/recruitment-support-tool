# Recruitment support tool
## Table contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Environment variables](#directory-structure)
* [How it works](#how-it-works)
* [Testing](#testing)
* [Directory structure](#directory-structures)

## General info
This tool will help recruiters to maintain the programming tasks for candidates. After every merge, it will be executed from the pipeline. Among other things, the program will replace the content of the test files that are in GraphQL with those that are on the computer.


## Technologies
Project is created with:
* NodeJS version: 20.0.0
* [Mocha version: 10.2.0](https://mochajs.org/)
* [Chai version: 4.3.7](https://www.chaijs.com/)


## Setup
To run script test you should have bash installed.

To run this project, navigate to inside the project folder on terminal where package.json file is located then type
```
$ npm install
$ node uploadFile.js [path to local folder containing test files]
```

## Environment variables 
Environment variables used in the project:
- BEARER_TOKEN - bearer token, which we can get from developer tools from the browser. It's one of the headers in the GraphQL query
- PROJECT_ID - it's the project's id, which we can take from URL address, when we had opened the project

Those variables are stored in Github variables for pipelines. 
To run the project locally, you must either create environment variables named as such or declare them temporarily when run the script.

## How it works  
To add a new file, you should create a new branch as main branch's clone. On your branch add new exercises as its members below. When every file is ready to be uploaded to recruitment platform (we suggest running ```npm test``` locally to make sure, that everythink is all right), you should create a new pull request to merge from your branch to main branch of another recruiter. After the recruiter accepts pull request and all files are uploaded to the main branch, Github's workflow will start **validator_test.js** for every directory and if every test passed, **uploadFile.js** - a script, which uploads every file named **task.js** and **task_validator.js** and all configuration files on recruitment platform. If any test fails, 
**uploadFile.js** will be not execute, and you should correct your tasks.

## Testing
To run **validator_test.js** locally you should use ```npm test``` command in the Recruitment folder.

## Directory structure
Only **Recruitment** directory is uploaded to the Playcode.io. This directory should contain configuration files and directories with lists of exercises. Every directory with exercises is including 4 files:
- file **task.js** 
- file **model_solutions.js**
- file **task_validator.js**
- file **validator_test.js**
>
When you add new exercises to the project, you should include those files to **Recruitment/index.html** file, as shown in the example (below).
>
Example
```html
<script src="01/task.js"></script>
<script src="01/task_validator.js"></script>
```

### File **task.js**
This file contains tasks as functions declarations and their descriptions. Candidate has to implement it. We suggest to name this module as general_{*directory name*}. Every module have to have diffrent name.
>
Example
```javascript
window.general_01 = {

    /**
    * Returns difference of a and b.
    */
    subtract: function(a, b) {
    },

};

module.exports = {
    general: general_01,
}
```

### File **model_solutions.js**
In this file there should be correct solutions enclosed in an object named *general*. Correct solution names should be the same as in **task.js** file. In object *incorrectSolutions* should be incorrect solutions, also named same as in **task.js** file. Module general have to have the same name as in **task.js** file
>
Example
```javascript 
const general_01 = {
  subtract: function(a, b) {
    return a - b
  },
};

const incorrectSolution = {
  subtract: function(a, b) {
    return b - a
  },
};

module.exports = {
  general_01,
  incorrectSolution
}
```

### File **task_validator.js**
This file should contain tests for all tasks from **task.js** file. Tests' names should be the same as tested functions. Additionaly you should rename value of ```javascript
TASKS_LIST_NAME``` to tasks list name In separate scope we make assertions and later we check results for those assertions using *it* methods in *tests* function. Every testing function, which is added to the file, should be also added in *module.exports* object. Labels to test in *it* methods should follow the pattern: 
>
*name of the testing function*: This method should *explain, what function should do*
>
Example
```javascript 
var expect = require('chai').expect
const TASKS_LIST_NAME = 'List 01'

var subtract = (functionToTest) => {
  expect(functionToTest(8, 6)).to.eql(2);
  expect(functionToTest(-2, 2)).to.eql(-4);
  expect(functionToTest(-3, -6)).to.eql(3);
  expect(functionToTest(0, 0)).to.eql(0);
}
describe(`${TASK_LIST_NAME}:`, function () {
  it('subtract: This method should subtract two numbers', () => subtract_test(general_01.subtract));
});


module.exports = {
  subtract: subtract_test
}
```

### File **validator_test.js**
In this file we are checking if every test from validator return expected output - true for functions from *general* module and false for functions from *incorrectSolutions* module from **model_solutions.js** file.

