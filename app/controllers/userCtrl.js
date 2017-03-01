'use strict';

// login, logout, register, loginGoogle, conditional, authfactory
app.controller('userCtrl', function ($scope, $window, AuthFactory) {

/*
	$location does not cause a full page reload when the browser URL is changed. 
	To reload the page after changing the URL, use the lower-level API, $window.location.href.
	http://docs.angularjs.org/guide/dev_guide.services.$location
 */
	$scope.isLoggedIn = false;

	$scope.account = {
		email: '',
		password: ''
	};

	$scope.logout = () => {
		console.log("logout clicked");
		AuthFactory.logoutUser().then(function(data){
			console.log("logged out?", data);
			$window.location.url = "#!/login";
			$scope.isLoggedIn = false;
		}, function(error){
			console.log("error occured on logout");
		});
	};

	//when first loaded, make sure no one is logged in
	if(AuthFactory.isAuthenticated()){
		$scope.logout();
	}

	$scope.register = () => {
    	console.log("you clicked register");
	    AuthFactory.createUser({
	      email: $scope.account.email,
	      password: $scope.account.password
	    }).then((userData) => {
	      console.log("UserCtrl newUser: ", userData );
	      $scope.login();
	    }, (error) => {
	        console.log("Error creating user: ", error);
	    });
  	};

  	$scope.login = () => {
    	console.log("you clicked login");
    	AuthFactory.loginUser($scope.account)
	    .then( () => {
	    	console.log("UserCtrl: user is loggedIn", $scope.isLoggedIn );
	        $scope.isLoggedIn = true;
	        $window.location.href = "#!/music/list";
	    });
	};

	$scope.loginGoogle = () => {
		console.log("you clicked login with Google");
		AuthFactory.authWithProvider().then(function(result) {
	    	console.log("logged in user: ", result.user.uid);
	    	//Once logged in, go to another view
	    	$scope.isLoggedIn = true;
	    	$window.location.href = "#!/music/list";
	  	}).catch(function(error) {
	    	console.log("error with google login", error);
	  	});
	};


});