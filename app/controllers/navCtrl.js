"use strict";

app.controller('navCtrl', function($scope, $window, AuthFactory, FilterFactory) {
	$scope.searchText = FilterFactory;
	$scope.isLoggedIn = false;

	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			$scope.isLoggedIn = true;
			console.log("User logged in? ", user, $scope.isLoggedIn);
		} else {
			$scope.isLoggedIn = false;
			console.log("User logged in? ", $scope.isLoggedIn);
			$window.location.href = "#!/login";
		}
	});

});