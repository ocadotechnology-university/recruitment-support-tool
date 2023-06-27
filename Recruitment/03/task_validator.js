var expect = require('chai').expect
const TASKS_LIST_NAME = 'Task 3'

var divisible_test = (functionToTest) => {
    expect(functionToTest(5, 7)).to.be.false;
    expect(functionToTest(4, 2)).to.be.true;
    expect(functionToTest(-8, 2)).to.be.true; 
    expect(functionToTest(0, 7)).to.be.true;
    expect(functionToTest(4, 3)).to.be.false; 
}

var exponentiation_test = (functionToTest) => {
    expect(functionToTest(2, 0)).to.eql(1);
    expect(functionToTest(0, 8)).to.eql(0);
    expect(functionToTest(-2, 3)).to.eql(-8);
    expect(functionToTest(2, 4)).to.eql(16);
}



describe(`${TASKS_LIST_NAME}:`, function () {
    it('divisible: This method should checks if the number a is divisible by b.', () => divisible_test(general_03.add));
    it('exponentiation: This method should a raised to power b', () => exponentiation_test(general_03.exponentiation));
  });

module.exports = {
    divisible: divisible_test,
    exponentiation: exponentiation_test,
}
