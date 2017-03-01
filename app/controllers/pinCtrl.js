'use strict';

app.controller('pinCtrl', function($scope, $window, AuthFactory, ApiSearchFactory, FilterFactory) {

	//$scope.searchText = FilterFactory; 
	// controls imgSearch.html
	$scope.searchImageString = '';

	$scope.searchImages = function () {
		ApiSearchFactory.bingImageSearch($scope.searchImageString).then(function (imgData) {
			console.log(imgData);
			$scope.imageResults = imgData;
		});
	};

});