var general = require('./test.js')
var validator = require('./task_validator')
var expect = require('chai').expect
//tu require test a nie w validatorze

//tu przenieść try catch na razie 
// dwukrotne require - czy pusci dwa razy testy?
var result

try {
  validator.validation1()
  result = true
} catch (error) {
  result = false
}


// var test1 = () => {
//     expect(validator.validation1).to.be.true;
// // }
// var test2 = () => {
//     expect(validator.result).to.be.true;
// }


describe('Test validator', function testing() {
  //it('This should test validator1', test1);
  it('This should test validator2', result);
});

