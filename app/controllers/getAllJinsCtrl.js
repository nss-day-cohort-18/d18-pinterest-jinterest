'use strict';

app.controller('getAllJinsCtrl', function($scope, $routeParams, $location, AuthFactory, FirebaseStorage) {

    FirebaseStorage.getAllJins()
    .then(function(allJins){
        console.log(allJins);
        $scope.allUserJins = allJins;
    });

	// $scope.aJin = $routeParams;
	console.log('Current location: ' + $location.path());

});