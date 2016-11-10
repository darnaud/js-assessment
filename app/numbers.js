if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        bin_num = num.toString(2);
        
        return parseInt(bin_num[(bin_num.toString(10).length - bit)]);
    },

    base10: function(str) {
        return parseInt(str,2);
    },

    convertToBinary: function(num) {
       num = num.toString(2);

       while(num.length < 8){
            num = '0'+ num;
       }
       
       return num; ;
    },

    multiply: function(a, b) {
        return (1000*a*b)/(1000);
    }
  };
});

