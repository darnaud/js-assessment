if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var index = -1;
        for (var i = 0; i < arr.length; i++){
            if (item == arr[i])
                index = i ;
            else
                continue;    
        }

        return index;   
    },

    sum : function(arr) {
        var total = 0;

        for (var i =0; i< arr.length; i++){
            total += arr[i];
        }

        return total;
    },

    remove : function(arr, item) {

    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
