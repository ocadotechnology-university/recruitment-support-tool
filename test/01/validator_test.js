var validator = require('./task_validator')
var expect = require('chai').expect



// var test1 = () => {
//     expect(validator.validation1).to.be.true;
// }
var test2 = () => {
    expect(validator.result).to.be.true;
}


describe('Test validator', function testing() {
  //it('This should test validator1', test1);
  it('This should test validator2', test2);
});

