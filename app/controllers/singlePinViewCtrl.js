'use strict';

app.controller('singlePinViewCtrl', function($scope,$routeParams, AuthFactory, FirebaseStorage) {
  
	 console.log('test');

    $scope.allJins = [];
    console.log($routeParams.jinId);

  	FirebaseStorage.getAllJins().then(function(allJins) {
         // console.log(allJins);
	  		  $scope.allJins = allJins;

          $scope.selectedItem = $scope.allJins.filter(function(aJin) {
    	   // console.log(aJin);
          return aJin.id === $routeParams.jinId;
    })[0];
  });



});