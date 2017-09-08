var VEX = artifacts.require("./VEX.sol");

contract('VEX', function(accounts) {

    var a = 5;
    var b = 13;

    it("Say hello", function() {
	console.log("hello");
    });

    it("Add two numbers", function() {
	return VEX.deployed().then(function(instance) {
	    return instance.add.call(a,b);
	}).then(function(result) {
	    assert.equal(a+b, result.toNumber());
	    console.log(a + "+" + b + "=" + result.toNumber());	    
	});
    });

    it("Subtract two numbers", function() {
	return VEX.deployed().then(function(instance) {
	    return instance.subtract.call(a,b);
	}).then(function(result) {
	    assert.equal(a-b, result.toNumber());
	    console.log(a + "-" + b + "=" + result.toNumber());	    
	});
    });

    it("Multiply two numbers", function() {
	return VEX.deployed().then(function(instance) {
	    return instance.multiply.call(a,b);
	}).then(function(result) {
	    assert.equal(a*b, result.toNumber());
	    console.log(a + "*" + b + "=" + result.toNumber());	    
	});
    });
    
});
