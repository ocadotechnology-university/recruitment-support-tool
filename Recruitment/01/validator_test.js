var general = require('./model_solutions.js')
var validator = require('./task_validator')
var expect = require('chai').expect

// dwukrotne require - czy pusci dwa razy testy?

//funkcja przyjmuje dwa argumenty - funkcje do sprawdzenia (functionToCheck) oraz spodziewany output (expectedOutput), 
//jeżeli sprawdzana funkcja zwraca spodziewany output to jako rezultat testu zwracamy true, w przeciwnym wypadku false
var test = (functionToCheck, expectedOutput) => {
  try{
    functionToCheck()
    result = (true === expectedOutput)
  }catch(err){
    result = (false === expectedOutput)
  }
  return result
}

// dla każdej funkcji z validatora sprawdzamy, czy zwraca spodziewany output oraz zapisujemy w liscie
let resultList = []
for( let fun in validator){
  let expectedOutput = (fun.split('_')[1] == 'true') ? true : false
  let result = test(validator[fun], expectedOutput)
  resultList[fun] =  result
}

// Wypisanie wyników testów na wyjscie
describe('Test validator', function testing() {
  for( let fun in validator){
    it(`This should test function ${fun.split('_')[0]} with expected output ${fun.split('_')[1]}`, function() {
      expect(resultList[fun]).to.be.true;
    })
  }
});

