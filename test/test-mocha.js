var should = require('should');
var assert = require('assert');

describe('general test', function() {

	before(function(done){
		//TODO: add any setup that needs done
		done();
	});

	describe('specific function', function(){
		it('should return true', function(done){
			var a = 1;
			a.should.equal(1);
			done();
		});
	});
});
