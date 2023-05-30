# Recruitment support tool
## Table contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
## General info
This tool will help recruiters to maintain the programming tasks for candidates. After every merge, it will be executed from the pipeline. Among other things, the program will replace the content of the test files that are in GraphQL with those that are on the computer.


## Technologies
Project is created with:
* NodeJS version: 20.0.0
* [Mocha version: 10.2.0](https://mochajs.org/)
* [Chai version: 4.3.7](https://www.chaijs.com/)


## Setup
To run this project, navigate to inside the project folder on terminal where package.json file is located then type
```
$ npm install
$ node test.js [path to local folder containing test files]
```
