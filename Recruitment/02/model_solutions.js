general = (function() {

    return {

      add : function(a, b) {
        return a + b
      },

      subtract : function(a, b) {
        return a - b
      },
    };
  
  })();


incorrectSolution = (function() {
  return {

    add : function(a, b) {
      return a + b + 1
    },

    subtract : function(a, b) {
      return b - a
    },
  };
})();

module.exports = {
  general,
  incorrectSolution
}