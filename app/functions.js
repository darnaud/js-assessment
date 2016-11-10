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

    // from here to the bottom I got stuck
    partial : function(fn, str1, str2) {
        return function(str3) {
        return fn.call(null, str1, str2, str3);
      };
    },

    useArguments : function() {
        var sum_args = 0;

        for (var i = 0; i < arguments.length; i++){
            sum_args += arguments[i];
        }

        return sum_args;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);
        
        return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args1 = Array.prototype.slice.call(arguments, 1, arguments.length);
        return function() {
            var args2 = args1.concat(Array.prototype.slice.call(arguments));
            return fn.apply(null, args2);
        };
    },

    curryIt : function(fn) {
        function apply_args(_fn, args) {
            return _fn.apply(null, args);
        }

        function get_args_acc(args_acc, expected_arg_count) {
            return function (arg) {
                args_acc.push(arg);

                if (args_acc.length === expected_arg_count) {
                    return apply_args(fn, args_acc);
                }

                return get_args_acc(args_acc, expected_arg_count);
                 };
            }       

        return get_args_acc([], fn.length);
    }
  };
});
