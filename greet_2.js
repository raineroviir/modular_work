'use strict';

exports.greet = function(name) {
	return 'hello ' + name;
};

//exports = create empty object. adding method greet to that object, and equaling a function
// exports.greet vs module.exports=  func greet.. the difference is calling it u use greet.greet and the other one just greet.


//exports is an alias for module.exports
// var Greet = function() {};
// module.exports = exports = Greet;

// .gitignore node modules
// .gitignore is a list of files git doesn't deploy

// trailing slashes mean its specificially a directory.  double star ** means recursively look through every directory and put **/node_modules on .gitignore


//for the homework create a pull request of all your files from today