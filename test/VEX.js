var VEX = artifacts.require("./VEX.sol");

contract('VEX', function(accounts) {
    
    it("say hello", function() {
	console.log("hello");
    });

    it("add nums", function() {

	return VEX.deployed().then(function(instance) {
	    func = instance.add.call;
	    func(2,3).then(function(x) {
		console.log("2 + 3 =",x.toNumber());
		
	    });
	})
    });
    
    
});
