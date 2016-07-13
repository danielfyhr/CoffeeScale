(function() {

	var app = angular.module('coffeescale', []);

	app.controller('CoffeeController', function() {
		
		this.coffeeTypes = coffeeTypes;
		this.coffeeWeight = coffeeWeight;
		this.selectedCoffeeType = selectedCoffeeType;
		
		this.selectCoffeeType = function(setCoffeeType) {
			//console.log("this.selectedCoffeeType now set to = " + this.selectedCoffeeType.name);
			this.selectedCoffeeType = setCoffeeType;
		};

		this.coffeeTypeIsSelected = function(checkType) {
			//console.log("hello world from coffeeTypeIsSelected with " + checkType.name);
			return this.selectedCoffeeType === checkType;
		};

		this.getWaterWeight = function() {
			//console.log("updating result... selectedCoffeeType.name is: " + this.selectedCoffeeType.name);
			return this.coffeeWeight * this.selectedCoffeeType.multiplier;
		};

		/*
		this.toggleHelp = function() {
			console.log("this.toggleHelp: from: " + this.helpIsEnabled + ' to: ' + !this.helpIsEnabled);
			this.helpIsEnabled = !this.helpIsEnabled;
		};
		*/		

	});

	var coffeeTypes = [
			{
				name: 'Coldbrew',
				description: 'coldbrew asdfjlasdfjasdklfjlasdjfasdfio afnasdo fnasoifnasdiofnasdofnasdof',
				multiplier: 6 
			},
			{
				name: 'Frenchpress',
				description: 'asdpgijaerogiaeriogeritueroituertiouer eritoeriteritireut vnxcmvnxcmvnxcmvnxmcvn',
				multiplier: 17 }
	];

	var selectedCoffeeType = coffeeTypes[0];

	var coffeeWeight = 10;

})();