'use strict';

app.controller('getAllJinsCtrl', function($scope, $routeParams, $location, AuthFactory, FirebaseStorage) {

    FirebaseStorage.getAllJins().then(function(allJins){
        // console.log('Complete list of all jins: ', allJins);
        $scope.allUserJins = allJins;
    });

	// console.log('Current location: ' + $location.path());

});