if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var keys = Object.keys(obj);
    	for(i =0; i< keys.length; i++){
    		keys[i] =keys[i] +': '+obj[keys[i]];

    	}
    	return keys;
    }
  };
});
