'use strict';

app.controller('newPinCtrl', function($scope, $location, AuthFactory, FirebaseStorage) {

	let user = AuthFactory.getUser();
	let userEmail = AuthFactory.getUserEmail();
	let displayName = AuthFactory.getUserDisplayName();
  
	$scope.newPin = {
		name: '',
		id: '',
		thumbnailUrl: '',
		url: '',
		boardid: '',
		uid: user,
		email: userEmail,
		displayName: displayName
	};

	$scope.addNewPin = function() {
		console.log('Add a Pin');
      	FirebaseStorage.addNewJin($scope.newPin).then(function(response) {
        	$location.url("jinterest/jinList");
      	});
      	console.log('You manually added a pin: ', $scope.newPin);
      	$scope.newPin = {};
	};

});