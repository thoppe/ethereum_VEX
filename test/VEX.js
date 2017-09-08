var VEX = artifacts.require("./VEX.sol");

function test_constant_function(func_name, a, b, expected_result) {
    
    return VEX.deployed().then(function(instance) {
	return instance[func_name].call(a,b);
    }).then(function(result) {
	console.log(func_name, a, b, "= " + result.toNumber());
	assert.equal(result.toNumber(), expected_result);
    });
    
};

function test_network_function(func_name, a, b, expected_result) {

    return VEX.deployed().then(function(instance) {
	return instance[func_name](a,b);
    }).then(function(result) {
	log = result.logs[0]
	val = log.args._value;
	console.log(a + "+" + b + "=" + val.toNumber());
	console.log("Mined on blockNumber", log.blockNumber);
	console.log("Gas used: ", result.receipt.gasUsed);
	assert.equal(a+b, val.toNumber());
    });
};




contract('VEX', function(accounts) {

    var a = 5;
    var b = 13;

    it("Say hello", function() {
	console.log("hello");
    });
    

    it("Add two numbers", function() {
	test_constant_function("add", a, b, a+b);
    });

    it("Subtract two numbers", function() {
	test_constant_function("subtract", a, b, a-b);
    });

    it("Multiply two numbers", function() {
	test_constant_function("multiply", a, b, a*b);
    });

    it("Add two numbers on the network", function() {
	test_network_function("network_add", a, b, a+b);
    });

});
