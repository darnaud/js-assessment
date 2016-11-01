if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        re = /\w+/g;
        return re.test(str);
    },

    containsRepeatingLetter : function(str) {

    },

    endsWithVowel : function(str) {
        re = /([aeiou])$/g;
        return re.test(str);
    },

    captureThreeNumbers : function(str) {
        re = /\d{3}/g;
        match = re.exec(str);
        return match[0];
    },

    matchesPattern : function(str) {
        return str.test(pattern);
    },
    isUSD : function(str) {
        re = /^\$\d+(,\d{3})?(.\d{2})?$/g;
        return re.test(str);
    }
  };
});
