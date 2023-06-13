const expect = require('chai').expect

const multiplicate = (functionToTest) => {
    expect(functionToTest(5, 7)).to.eql(35);
    expect(functionToTest(-4, -3)).to.eql(12);
    expect(functionToTest(0, 0)).to.eql(0); 
    expect(functionToTest(-2, 2)).to.eql(-4);
    expect(functionToTest(4, 4)).to.eql(16) 
}

const divide = (functionToTest) => {
  expect(functionToTest(8, 4)).to.eql(2);
  expect(functionToTest(-2, 2)).to.eql(-1);
  expect(functionToTest(-3, -6)).to.eql(0.5);
  expect(functionToTest(0, 1)).to.eql(0);
}

const tests = describe('task validator:', function testing() {
  it('multiplicate: This method should multiplicate two numbers', () => multiplicate(general.multiplicate));
  it('divide: This method should divide two numbers', () => divide(general.divide));
});

module.exports = {
  multiplicate,
  divide,
}

