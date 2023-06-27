general_01 = (function() {
  return {
    add: function(a, b) {
      return a - b 
    },
  
    subtract: function(a, b) {
      return a - b
    },
  };
})();

//here we need IIFE, because otherwise in task_validator.js this test would fail, because '0 failed' as output is needed

const incorrectSolution = {
  add: function(a, b) {
    return a + b + 1
  },

  subtract: function(a, b) {
    return b - a
  },
};

module.exports = {
  general_01,
  incorrectSolution
}