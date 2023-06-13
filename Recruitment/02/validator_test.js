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
let resultList = {}
Object.keys(validator).map(fun => {
  const correctResultValid = test(validator[fun], general[fun], true)
  const incorrectResultValid = test(validator[fun], incorrectFunction[fun], false)
  resultList[fun] = {'correctResultValid': correctResultValid, 'incorrectResultValid': incorrectResultValid}
})

// Write results every test with describe
describe(`Directory ${__dirname.split('\\').pop()}, test validator`, function testing() {
  Object.keys(resultList).map(result => {
    it(`This should test function ${result} with expected result TRUE`, function() {
      expect(resultList[result]['correctResultValid']).to.be.true;
    });
    it(`This should test function ${result} with expected result FALSE`, function() {
      expect(resultList[result]['incorrectResultValid']).to.be.true;
    })
  })
});

