'use strict';

app.controller('userJinsCtrl', function ($scope, AuthFactory, FirebaseStorage, FilterFactory) {

    $scope.searchText = FilterFactory;
    let user = AuthFactory.getUser();

    FirebaseStorage.getUserJins(user).then(function (userJinList) {
    	console.log("userJinList", userJinList);
    	$scope.userJins = userJinList;
    });

    FirebaseStorage.getUserBoards(user).then( function (userBoardList) {
    	console.log("userBoardList", userBoardList);
    	// console.image("http://i.imgur.com/oGiMR.gif");
    	$scope.userBoards = userBoardList;

    });


    $scope.itemDelete = function (jinId) {
    console.log('deleting Jin ', jinId);
    FirebaseStorage.deleteUserJin(jinId).then(function(response){
      FirebaseStorage.getUserJins(user).then(function(userJinList){
      $scope.userJins = userJinList;
            });
        });
    };

    $scope.displayUserBoard = (board, boardName) => {
    	console.log("board!", board);
        $scope.filterBoard = board;
        console.log("your board!", $scope.filterBoard);
        $scope.currentBoard = boardName;
    };

});