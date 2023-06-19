const general = require('./model_solutions.js').general
const incorrectFunction = require('./model_solutions.js').incorrectSolution
const validator = require('./task_validator')
const expect = require('chai').expect
const path = require('path')

const CORRECT_KEY = 'correctResultValid'
const INCORRECT_KEY = 'incorrectResultValid'

// function get 3 arguments 
// 1. testToCheck - test function from task_validator.js file
// 2. functionToTest - function to test from module from model_solutions.js file
// 3. expectedOutput - expected output; true for functions from general module and false for functions from incorrectSolutions module
// function return true if tst return expected output otherwise false
const test = (testToCheck, functionToTest, expectedOutput) => {
  "use strict";
  try{
    testToCheck(functionToTest)
    return expectedOutput
  }catch(err){
    return !expectedOutput
  }
}

// for every test, check matching function from general and incorrectSolutions and write result to list
const resultList = Object.keys(validator).map(fun => {
  const correctResultValid = test(validator[fun], general[fun], true)
  const incorrectResultValid = test(validator[fun], incorrectFunction[fun], false)
  return {[fun]:{[CORRECT_KEY]: correctResultValid, [INCORRECT_KEY]: incorrectResultValid}}
}).reduce((acc, cur) => {
  return {...acc, ...cur}
}, {})

// Write results every test with describe
describe(`Directory ${__dirname.split('\\').pop()}, test validator`, () => {
  Object.keys(resultList).map(result => {
    it(`This should test function ${result} with expected result TRUE`, () => {
      expect(resultList[result][CORRECT_KEY]).to.be.true;
    });
    it(`This should test function ${result} with expected result FALSE`, () => {
      expect(resultList[result][INCORRECT_KEY]).to.be.true;
    })
  })
});