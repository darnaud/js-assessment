if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        re = /\d+/g;
        if(re.test(str))
            return true;
        else
            return false;
    },

    containsRepeatingLetter : function(str) {
        re = /([A-za-z])\1/g;
        if(re.test(str))
            return true;
        else
            return false;
    },

    endsWithVowel : function(str) {
        re = /([AEIOUaeiou])$/g;
        if(re.test(str))
            return true;
        else
            return false;
    },

    captureThreeNumbers : function(str) {
        re = /\d{3}/g;
        match = re.exec(str);
        if(match){
            match = match.join("");
            return match;
        }
        else
            return false
    },

    matchesPattern : function(str) {
        re = /^\d{3}-\d{3}-\d{4}$/g;
        if(re.test(str))
            return true;
        else
            return false;

    },
    isUSD : function(str) {
        re = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/g;
        if(re.test(str))
            return true;
        else
            return false;
    }
  };
});
