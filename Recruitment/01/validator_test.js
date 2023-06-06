const general = require('./model_solutions.js').general
const incorrectFunction = require('./model_solutions.js').incorrectSolution
const validator = require('./task_validator')
const expect = require('chai').expect
const path = require('path')

// function get 3 arguments 
// 1. testToCheck - test function from task_validator.js file
// 2. functionToTest - function to test from module from model_solutions.js file
// 3. expectedOutput - expected output, which test should return, true for functions from general module and false for functions from incorrectSolutions module
// function return true if tst return expected output otherwise false
const test = (testToCheck, functionToTest, expectedOutput) => {
  "use strict";
  let res
  try{
    testToCheck(functionToTest)
    res =  expectedOutput
  }catch(err){
    res = !expectedOutput
  }
  return res
}

// for every test, check matching function from general and incorrectSolutions and write result to list
let resultList = []
Object.keys(validator).forEach(fun => {
  let result = test(validator[fun], general[fun], true)
  resultList[fun + '_true'] =  result
  
  result = test(validator[fun], incorrectFunction[fun], false)
  resultList[fun + '_false'] =  result
})

// Write results every test with describe
describe(`Directory ${__dirname.split('\\').pop()}, test validator`, function testing() {
  Object.keys(resultList).forEach(result => {
    it(`This should test function ${result.split('_')[0]} with expected result ${result.split('_')[1]}`, function() {
      expect(resultList[result]).to.be.true;
    })
  })
});

