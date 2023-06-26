var expect = require('chai').expect

var divisible = (functionToTest) => {
    expect(functionToTest(5, 7)).to.be.false;
    expect(functionToTest(4, 2)).to.be.true;
    expect(functionToTest(-8, 2)).to.be.true; 
    expect(functionToTest(0, 7)).to.be.true;
    expect(functionToTest(4, 3)).to.be.false; 
}

var exponentiation = (functionToTest) => {
    expect(functionToTest(2, 0)).to.eql(1);
    expect(functionToTest(0, 8)).to.eql(0);
    expect(functionToTest(-2, 3)).to.eql(-8);
    expect(functionToTest(2, 4)).to.eql(16);
}

var tests = describe('task validator:', function () {
    it('divisible: This method should checks if the number a is divisible by b.', () => divisible(general.divisible));
    it('exponentiation: This method should a raised to power b', () => exponentiation(general.exponentiation));
});

module.exports = {
    divisible,
    exponentiation,
}
