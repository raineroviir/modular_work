'use strict';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.initConfig({
		jshint: {
			dev: {
				src: ['Gruntfile.js', 'greet*.js', 'test/*.js']
			},
			options: {
				jshintrc: '.jshintrc'
			}
		},
		simplemocha: {
	    devorallorunicorns: { 
	    	src: ['test/*.js'] 
	    	},
		    options: {
		    	node: true,
		      globals: ['should'],
		      timeout: 3000,
		      ignoreLeaks: false,
		      // grep: '*-test',
		      ui: 'bdd',
		      reporter: 'tap'
		    }
		},
		watch: {
		  scripts: {
		    files: ['Gruntfile.js', 'gree*.js', 'test/*.js'],
		    tasks: ['test'],
		    options: {
		    },
		  },
		},
	});

grunt.event.on('watch', function(action, filepath, target) {
  grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.registerTask('test', ['jshint:dev', 'simplemocha:devorallorunicorns']);
	grunt.registerTask('default', ['test']);
};