function getRandom() {
	return Math.floor((Math.random() * 20) + 1);
}

(function() {
 angular.module('game', [])
	.controller('GGController', function GGController($scope) {
			this.init = getRandom();
			this.noOfGuesses=0;

			this.checkGuess = function () {
			
			this.diff = this.init - this.guess;
			this.noOfGuesses = this.noOfGuesses+1;

			};

			this.initialize = function () {
				this.noOfGuesses = 0;
				this.init =getRandom();
				this.guess = null;
				this.diff = null;
			};
	})
})();

		
	