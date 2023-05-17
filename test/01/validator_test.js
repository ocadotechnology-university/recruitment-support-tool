var general = require('./test.js')
var validator = require('./task_validator')
var expect = require('chai').expect

// dwukrotne require - czy pusci dwa razy testy?

var result

for (let fun in validator){
  console.log(fun)
  
}

//czyli try catcha wkłądamy do funkcji (fun, output)  która od razu robi excepta i wstawia do ita

try {
  validator.validation1()
  result = true
} catch (error) {
  result = false
}

var test1 = () => {
    expect(result).to.be.true;
}

try {
  validator.validation2()
  result = true
} catch (error) {
  result = false
}

var test2 = () => {
    expect(result).to.be.true;
}
//fora w descirbie wgl wolno? który od razu robi ita 
describe('Test validator', function testing() {
  it('This should test validator1', test1);
  it('This should test validator2', test2);
});

