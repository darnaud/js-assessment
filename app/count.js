if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
 		for (i = start; i <= end; i++){
 			setInterval(100);
 			console.log(i);

 		}
    }
  };
});