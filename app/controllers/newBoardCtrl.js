'use strict';

app.controller('newBoardCtrl', function($scope, $location, AuthFactory, FirebaseStorage) {

	let user = AuthFactory.getUser();

	$scope.newBoard = {
		boardName: '',
		id: '',
		uid: user
	};

	$scope.addNewBoard = function() {
      	FirebaseStorage.addNewBoard($scope.newBoard).then(function(response) {
        	$location.url("jinterest/jinList");
      	});
      	console.log('You added a new board: ', $scope.newBoard);
      	$scope.newBoard = {};
	};

});
