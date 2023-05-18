general = (function() {

    return {

      add : function(a, b) {
        return a + b
      },

      add_false : function(a, b){
        return a + b + 1
      },

      subtract : function(a, b) {
        return a - b
      },

      subtract_false : function(a, b) {
        return b - a
      },
    };
  
  })();

module.export = general;