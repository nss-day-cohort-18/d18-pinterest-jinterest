'use strict';

app.controller('newPinCtrl', function($scope, $location, AuthFactory, FirebaseStorage) {

	let user = AuthFactory.getUser();
  
	$scope.newPin = {
		name: '',
		url: '',
		uid: user
	};

	$scope.addNewPin = function() {
		console.log('Add a Pin');
      	FirebaseStorage.addNewJin($scope.newPin).then(function(response) {
        	$location.url("jinterest/jinList");
        	console.log(response);
      	});
      	console.log('You added a pin: ', $scope.newPin);
      	$scope.newPin = {};
	};

});