const expect = require('chai').expect
const TASKS_LIST_NAME = 'List 02'

const multiplicate_test = (functionToTest) => {
    expect(functionToTest(5, 7)).to.eql(35);
    expect(functionToTest(-4, -3)).to.eql(12);
    expect(functionToTest(0, 0)).to.eql(0); 
    expect(functionToTest(-2, 2)).to.eql(-4);
    expect(functionToTest(4, 4)).to.eql(16) 
}

const divide_test = (functionToTest) => {
    expect(functionToTest(8, 6)).to.eql(4/3);
    expect(functionToTest(-2, 2)).to.eql(-1);
    expect(functionToTest(-3, -6)).to.eql(0.5);
    expect(functionToTest(0, 1)).to.eql(0);
}

describe(`${TASKS_LIST_NAME}:`, function () {
  it('multiplicate: This method should multiplicate two numbers', () => multiplicate_test(general_02.multiplicate));
  it('divide: This method should divide two numbers', () => divide_test(general_02.divide));
});

module.exports = {
  multiplicate: multiplicate_test,
  divide: divide_test,
}



