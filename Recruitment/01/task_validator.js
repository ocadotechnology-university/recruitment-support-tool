var expect = require('chai').expect

var add_true = () => {
    expect(general.add(5, 7)).to.eql(12);
    expect(general.add(-4, -3)).to.eql(-7);
    expect(general.add(0, 0)).to.eql(0); 
    expect(general.add(-2, 2)).to.eql(0);
    expect(general.add(4, 4)).to.eql(8) 
}

var add_false = () => {
  expect(general.add_false(5, 7)).to.eql(12);
  expect(general.add_false(-4, -3)).to.eql(-7);
  expect(general.add_false(0, 0)).to.eql(0); 
  expect(general.add_false(-2, 2)).to.eql(0);
  expect(general.add_false(4, 4)).to.eql(8) 
}

var subtract_true = () => {
  expect(general.subtract(8, 4)).to.eql(2);
}

var subtract_false = () => {
  expect(general.subtract_false(8, 4)).to.eql(2);
}

var tests = describe('task validator:', function testing() {
  it('add: This method should add a and b', add_true);
  it('subtract: This method should subtract a add b', subtract_true);
});

module.exports = {
  add_true,
  add_false,
  subtract_true,
  subtract_false
}

