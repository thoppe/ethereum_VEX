var provider_url = 'http://localhost:8545';
var f_deployed_contract = './build/contracts/VEX.json';

function update_result(res) {
    $('#result').text(res.logs[0].args._value);
    $('#transactionHash').text(res.receipt.transactionHash);
    $('#blockNumber').text(res.receipt.blockNumber);
    $('#gasUsed').text(res.receipt.gasUsed);
    console.log("Result was", res.logs[0].args._value);
};

function report_error(x) {
    $('#errorbox').append(x);
    console.log(x);
}

App = {
    web3Provider: null,
    contracts: {},

    init: function() {
	return App.initWeb3();
    },

    initWeb3: function() {
	// Initialize web3 and set the provider to the testRPC.
	if (typeof web3 !== 'undefined') {
	    App.web3Provider = web3.currentProvider;
	    web3 = new Web3(web3.currentProvider);
	} else {
	    // set the provider you want from Web3.providers
	    App.web3Provider = new web3.providers.HttpProvider(provider_url);
	    web3 = new Web3(App.web3Provider);
	}

	return App.initContract();
    },

    initContract: function() {	
	
	web3.eth.getAccounts(function(error, accounts) {
	    if (error) {
		report_error(error);
	    }

	    var account = accounts[0];
	    $('#account_hash').text(accounts);

	});

	$.getJSON(f_deployed_contract, function(data) {
	    App.contracts.VEX = TruffleContract(data);
	    App.contracts.VEX.setProvider(App.web3Provider);
	    //console.log( App.contracts.VEX );
	});
	
	return App.bindEvents();
    },
    
    bindEvents: function() {
	$(document).on('click', '.btn-process-add', App.processButtonAdd);
	$(document).on('click', '.btn-process-multiply', App.processButtonMul);
	$(document).on('click', '.btn-process-subtract', App.processButtonSub);
    },

    processButtonAdd: function() {
	App.processButton("network_add");
    },

    processButtonSub: function() {
	App.processButton("network_subtract");
    },

    processButtonMul: function() {
	App.processButton("network_multiply");
    },

    
    processButton: function(func_name) {

	var x = parseInt($("#data_x").val());
	var y = parseInt($("#data_y").val());
	console.log("Button pressed with",x,y);

	web3.eth.getAccounts(function(error, accounts) {

	    /*
	    App.contracts.VEX.deployed().then(function(vex) {
		return vex.add.call(x,y);
	    }).then(function(result) {
		update_result(result);
	    }).catch(function(err) {
		report_error(err.message);
	    });
	    */
	    
	    App.contracts.VEX.deployed().then(function(vex) {
		return vex[func_name](x,y);
	    }).then(function(result) {
		update_result(result);
	    }).catch(function(err) {
		report_error(err.message);
	    });
	    
	    
	});

	
    },

};

$(function() {
    $(window).load(function() {
	App.init();
    });
});
