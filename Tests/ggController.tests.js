describe('GGController', function() {

beforeEach(module('game'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

describe('$scope.initialize', function() {
    it('sets the initialize values', function() {
      var $scope = {};
      var controller = $controller('GGController', { $scope: $scope });
      
     controller.initialize();
     
      expect(controller.noOfGuesses).toEqual(0);
    });
  });

describe('$scope.checkGuess', function() {
    it('check guess is incremented', function() {
      var $scope = {};
      var controller = $controller('GGController', { $scope: $scope });
     
     
     controller.initialize();
      
     controller.checkGuess();
     
      expect(controller.noOfGuesses).toEqual(1);
    });
  });

describe('$scope.checkGuess', function() {
    it('check guess  difference is calculated', function() {
      var $scope = {};
      var controller = $controller('GGController', { $scope: $scope });
     
     
     controller.initialize();
  
     controller.checkGuess();
    expect(controller.diff).not.toBe(null);
    });
  });

describe('$scope.checkGuess', function() {
    it('check guess difference is zero by cheating', function() {
      var $scope = {};
      var controller = $controller('GGController', { $scope: $scope });
     
     
     controller.initialize();
     
     controller.guess = controller.init;
     
     controller.checkGuess();

  

      expect(controller.diff).toEqual(0);
    });
  });




});