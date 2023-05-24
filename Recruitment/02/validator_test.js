var general = require('./model_solutions.js').general
var incorrectFunction = require('./model_solutions.js').incorrectSolution
var validator = require('./task_validator.js')
var expect = require('chai').expect

// tutaj dac funkcje z falsem 

//funkcja przyjmuje dwa argumenty - funkcje do sprawdzenia (functionToCheck) oraz spodziewany output (expectedOutput), 
//jeżeli sprawdzana funkcja zwraca spodziewany output to jako rezultat testu zwracamy true, w przeciwnym wypadku false
var test = (testToCheck, functionToTest, expectedOutput) => {
  try{
    testToCheck(functionToTest)
    result = (true === expectedOutput)
  }catch(err){
    result = (false === expectedOutput)
  }
  return result
}

// dla każdej funkcji z validatora sprawdzamy, czy zwraca spodziewany output oraz zapisujemy w liscie
let resultList = []
for( let fun in validator){

  let result = test(validator[fun], general[fun], true)
  resultList[fun + '_true'] =  result
  
  result = test(validator[fun], incorrectFunction[fun], false)
  resultList[fun + '_false'] =  result
}

// Wypisanie wyników testów na wyjscie
describe('Test validator', function testing() {
  for( let result in resultList){
    it(`This should test function ${result.split('_')[0]} with expected result ${result.split('_')[1]}`, function() {
      expect(resultList[result]).to.be.true;
    })
  }
});

