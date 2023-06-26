general = (function() {
  return {
    multiplicate: function(a, b) {
      return a * b 
    },
  
    divide: function(a, b) {
      return a / b
    },
  };
})();

//here we need IIFE, because otherwise in task_validator.js this test would fail, because '0 failed' as output is needed

const incorrectSolution = {
  multiplicate: function(a, b) {
    return a + b + 1
  },

  divide: function(a, b) {
    return b / a
  },
};

module.exports = {
  general,
  incorrectSolution
}