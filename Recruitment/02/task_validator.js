var expect = require('chai').expect

var add = (functionToTest) => {
    expect(functionToTest(5, 7)).to.eql(12);
    expect(functionToTest(-4, -3)).to.eql(-7);
    expect(functionToTest(0, 0)).to.eql(0); 
    expect(functionToTest(-2, 2)).to.eql(0);
    expect(functionToTest(4, 4)).to.eql(8) 
}

var subtract = (functionToTest) => {
  expect(functionToTest(8, 6)).to.eql(2);
}

var tests = describe('task validator:', function testing() {
  it('add: This method should add a and b', () => add(general.add));
  it('subtract: This method should subtract a add b', () => subtract(general.subtract));
});

module.exports = {
  add,
  subtract,
}

