if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {

    	var newModule = {
    		greeting : str1,
    		name : str2,
    		sayIt : function(name, greeting){
    			return this.greeting + ", " + this.name;
    		}
    	};

    	return newModule;
    }
  };
});

