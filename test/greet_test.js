'use strict';

var expect = require('chai').expect;
var greet = require('../greet');

//series of IT blocks/statements are in the describe func.
//describe, it, before, before each, after, after each
describe('greet.js', function() {
	it('should greet someone', function() { 
		expect(greet('zaphod')).to.eql('hello zaphod'); 
		//tests are supposed to be human readable.  greet('zaphod') should equal 'hello zaphod'
	});
});
