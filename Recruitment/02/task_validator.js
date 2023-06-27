var expect = require('chai').expect

var multiplicate_test = (functionToTest) => {
    expect(functionToTest(5, 7)).to.eql(35);
    expect(functionToTest(-4, -3)).to.eql(12);
    expect(functionToTest(0, 0)).to.eql(0); 
    expect(functionToTest(-2, 2)).to.eql(-4);
    expect(functionToTest(4, 4)).to.eql(16) 
}

var divide_test = (functionToTest) => {
    expect(functionToTest(8, 6)).to.eql(4/3);
    expect(functionToTest(-2, 2)).to.eql(-1);
    expect(functionToTest(-3, -6)).to.eql(0.5);
    expect(functionToTest(0, 1)).to.eql(0);
}

var tests = describe('task validator:', function () {
  it('multiplicate: This method should multiplicate a and b', () => multiplicate_test(general.multiplicate));
  it('divide: This method should divide a add b', () => divide_test(general.divide));
});

module.exports = {
  multiplicate: multiplicate_test,
  divide: divide_test,
}

