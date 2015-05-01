'use strict';

var Greet = module.exports = exports = function() {};
// pattern seen in more adv. libraries, frequently it will be equal not to a function but just an empty object.
Greet.prototype.greet= function(name) {
	return 'hello ' + name;
}

