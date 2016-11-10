if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
 		function counting(){
 			console.log(start++);

 			if(start<=end){
 				timeout = setTimeout(counting,100)
 			}
 		}

 		counting();

 		return{
 			cancel: function(){
 				timeout && clearTimeout(timeout);
 			}
 		
 		};
    }
  };
});