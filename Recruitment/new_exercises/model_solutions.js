general = (function() {
    return {
        divisible: function(a, b) {
            return a%b == 0 
        },
        
        exponentiation: function(a, b) {
            return a ** b
        },
    };
})();
  
const incorrectSolution = {
    divisible: function(a, b) {
        return a%b
    },
  
    exponentiation: function(a, b) {
        return a * b
    },
};
  
module.exports = {
    general,
    incorrectSolution
}