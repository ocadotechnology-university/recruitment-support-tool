const general = {
  add : function(a, b) {
    return a + b 
  },

  subtract : function(a, b) {
    return a - b
  },
  
};


const incorrectSolution = {
  add : function(a, b) {
    return a + b + 1
  },

  subtract : function(a, b) {
    return b - a
  },
};

module.exports = {
  general,
  incorrectSolution
}