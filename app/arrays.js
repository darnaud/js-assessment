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
        temp = [];
        for (i = 0; i < arr.length; i++){
            if(arr[i] === item)
                continue;
            else
                temp.push(arr[i]);
        }

        return temp;
    },

    removeWithoutCopy : function(arr, item) {
       for(i =0; i< arr.length; i++){
            if(arr[i] == item){
                arr.splice(i,1);
                i = i-2;
            }
       }

       return arr;
    },

    append : function(arr, item) {
        temp = [];
        for (i in arr){
            temp.push(i);
        }

        temp.push(item);
        return temp;
    },

    truncate : function(arr) {
        temp = [];
        for (i =0; i < arr.length -1; i++){
            temp[i] = arr[i];
        }

        return temp;

    },

    prepend : function(arr, item) {
        temp = []
        temp.push(item);
        for (i in arr){
            temp.push(i);
        }
        return temp;
    },

    curtail : function(arr) {
        temp = [];
        for (i = 0; i < arr.length; i++){
            temp[i-1] = arr[i];
        }

        return temp;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
       temp = [];
       for(i =0; i < index; i++){
            temp.push(arr[i])
       }
       temp.push(item);
       for(i + 1; i< (arr.length); i++){
            temp.push(arr[i])
       }

       return temp;
    },

    count : function(arr, item) {
        counter = 0;
        for (i = 0; i < arr.length; i++){
            if (arr[i] === item){
                counter++;
            }
        }

        return counter;
    },

    duplicates : function(arr) {
        arr = arr.sort();
        dupl = [];
       for ( i = 0; i < arr.length; i++){
            if(arr[i] === arr[i+1]){
                if(dupl.length > 0){
                    for(j=0; j<dupl.length; j++){
                        if(arr[i] !== dupl[j]){
                            dupl.push(arr[i]);
                        }
                    }
                }
                else{
                    dupl.push(arr[i]);
                }
            }
       }
       return dupl;

    },

    square : function(arr) {
        temp = [];
        for (i = 0; i< arr.length; i++){
            temp[i] = arr[i]*arr[i];
        }

        return temp;
    },

    findAllOccurrences : function(arr, target) {
        
    }
  };
});
