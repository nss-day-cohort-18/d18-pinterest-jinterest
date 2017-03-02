'use strict';

app.controller('pinCtrl', function($scope, $location, AuthFactory, FirebaseStorage, ApiSearchFactory, FilterFactory) {

	//$scope.searchText = FilterFactory; 
	// controls imgSearch.html
	$scope.searchImageString = '';

	$scope.searchImages = function () {
		ApiSearchFactory.bingImageSearch($scope.searchImageString).then(function (imgData) {
			console.log(imgData);
			$scope.imageResults = imgData;
		});
	};

	$scope.addSelectedImageProp = function (selectedImageProperties) {

		let user = AuthFactory.getUser();
  
		$scope.imgPin = {
			name: selectedImageProperties.name,
			imageId: selectedImageProperties.imageId,
			thumbnailUrl: selectedImageProperties.thumbnailUrl,
			contentUrl: selectedImageProperties.contentUrl,
			boardid: '',
			uid: user
		};

      	FirebaseStorage.addNewJin($scope.imgPin).then(function(response) {
        	$location.url("jinterest/jinList");
        	console.log(response);
      	});
      	console.log('You added a pin from BING: ', $scope.imgPin);
      	$scope.imgPin = {};
	
	};


});
