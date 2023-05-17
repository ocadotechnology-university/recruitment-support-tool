var expect = require('chai').expect

var validation1 = () => {
    expect(general.add(5, 7)).to.eql(12);
    expect(general.add(-4, -3)).to.eql(-7);
    expect(general.add(0, 0)).to.eql(0); 
    expect(general.add(-2, 2)).to.eql(0);
    expect(general.add(4, 4)).to.eql(8) 
}

var validation2 = () => {
  expect(general.subtract(8, 4)).to.eql(2);
}

var tests = describe('task validator:', function testing() {
  it('add: This method should add a add b', validation1);
  it('subtract: This method should subtract a add b', validation2);
});

module.exports = {
  validation1,
  validation2
}

