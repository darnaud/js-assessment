if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null,arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str0){
            return str + ", " + str0 ;
        }
    },

    makeClosures : function(arr, fn) {
        clos_arr = []
        var clos_func = function(arg){
            return function(){
                return fn(arg);
            }
        }
        ;
        for(var i = 0; i < arr.length; i++){
            clos_arr.push(clos_func(arr[i]));
        }
        return clos_arr;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
        return fn.call(null, str1, str2, str3);
      };
    },

    useArguments : function() {
        var sumArgs = 0;

        for (var i = 0; i < arguments.length; i++){
            sumArgs += arguments[i];
        }

        return sumArgs;
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
