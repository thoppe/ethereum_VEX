var provider_url = 'http://localhost:8545'

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
		console.log(error);
	    }

	    var account = accounts[0];
	    $('#account_hash').text(accounts);

	});

	return App.bindEvents();
    },
    
    bindEvents: function() {
	$(document).on('click', '.btn-process', App.processButton);
    },

    
    processButton: function() {

	var x = parseInt($("#data_x").val());
	var y = parseInt($("#data_y").val());
	console.log("Button pressed with",x,y);

	/*


	//event.preventDefault();

	var petId = parseInt($(event.target).data('id'));

	var adoptionInstance;

	web3.eth.getAccounts(function(error, accounts) {
	    if (error) {
		console.log(error);
	    }

	    var account = accounts[0];

	    App.contracts.Adoption.deployed().then(function(instance) {
		adoptionInstance = instance;

		return adoptionInstance.adopt(petId, {from: account});
	    }).then(function(result) {
		return App.markAdopted();
	    }).catch(function(err) {
		console.log(err.message);
	    });
	});
	*/
	
    },

};

$(function() {
    $(window).load(function() {
	App.init();
    });
});
