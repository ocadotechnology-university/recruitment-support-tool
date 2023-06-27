const expect = require('chai').expect

const add_test = (functionToTest) => {
    expect(functionToTest(5, 7)).to.eql(12);
    expect(functionToTest(-4, -3)).to.eql(-7);
    expect(functionToTest(0, 0)).to.eql(0); 
    expect(functionToTest(-2, 2)).to.eql(0);
    expect(functionToTest(4, 4)).to.eql(8) 
}
 
const subtract_test = (functionToTest) => {
  expect(functionToTest(8, 6)).to.eql(2);
  expect(functionToTest(-2, 2)).to.eql(-4);
  expect(functionToTest(-3, -6)).to.eql(3);
  expect(functionToTest(0, 0)).to.eql(0);
}

describe('task validator:', function () {
  it('add: This method should add two numbers', function() { add_test(general_01.add)});
  it('subtract: This method should subtract two numbers', () => subtract_test(general_01.subtract));
});

module.exports = {
  add: add_test,
  subtract: subtract_test,
}

