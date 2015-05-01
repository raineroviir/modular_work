'use strict';

var expect = require('chai').expect;
var Greet = require('../greet_3');

describe('Greet', function() {
	var greet;

	before(function() { //set-up
		greet = new Greet();
	});
	// after() //tear-down
	it('should be able to greet someone', function() {
		expect(greet.greet('zaphod')).to.equals('hello zaphod');
	});
});

//try catch