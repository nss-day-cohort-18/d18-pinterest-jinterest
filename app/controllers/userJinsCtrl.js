'use strict';

app.controller('userJinsCtrl', function ($scope, AuthFactory, FirebaseStorage, FilterFactory) {

    $scope.searchText = FilterFactory;
    let user = AuthFactory.getUser();

    FirebaseStorage.getUserJins(user).then(function (userJinList) {
    	console.log(userJinList);
    	$scope.userJins = userJinList;
    });

  //   $scope.testFunction = () => {
  //   	const avatar_url = 'https://avatars3.githubusercontent.com/u/USER_ID';
 
		// console.image(avatar_url);
  //   };

    FirebaseStorage.getUserBoards(user).then( function (userBoardList) {
    	console.log("userBoardList", userBoardList);
    	$scope.userBoards = userBoardList;
    });

});