'use strict';

app.controller('pinCtrl', function($scope, $location, AuthFactory, FirebaseStorage, ApiSearchFactory, FilterFactory) {

	//$scope.searchText = FilterFactory; 
	// controls imgSearch.html
	$scope.searchImageString = '';

	$scope.searchImages = function () {
		ApiSearchFactory.bingImageSearch($scope.searchImageString).then(function (imgData) {
			// console.log('Data returned from Bing: ', imgData);
			$scope.imageResults = imgData;
		});
	};

	$scope.addSelectedImageProp = function (selectedImageProperties) {

		let user = AuthFactory.getUser();
		let userEmail = AuthFactory.getUserEmail();
		let displayName = AuthFactory.getUserDisplayName();
  
		console.log(displayName);

		$scope.imgPin = {
			name: selectedImageProperties.name,
			bingId: selectedImageProperties.imageId,
			id: '',
			thumbnailUrl: selectedImageProperties.thumbnailUrl,
			url: selectedImageProperties.contentUrl,
			boardid: '',
			uid: user,
			email: userEmail,
			displayName: displayName
		};

      	FirebaseStorage.addNewJin($scope.imgPin).then(function(response) {
        	$location.url("jinterest/jinList");
//        	console.log(response);
      	});
      	console.log('You added a jin from Bing: ', $scope.imgPin);
      	$scope.imgPin = {};
	
	};


});
