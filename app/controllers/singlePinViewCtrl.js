'use strict';

app.controller('singlePinViewCtrl', function($scope,$routeParams, AuthFactory, FirebaseStorage, $window) {

    let user = AuthFactory.getUser();
    let userEmail = AuthFactory.getUserEmail();
    let displayName = AuthFactory.getUserDisplayName();

    $scope.addJinToBoard = {};

    FirebaseStorage.getSingleJin($routeParams.jinId).then(function successCallback(response){
        console.log('getSingleItemResponse', response);
        $scope.selectedItem = response;
        $scope.addJinToBoard = response;
    });

    FirebaseStorage.getUserBoards(user).then(function(allBoards) {
      console.log('Info on Users Boards:', allBoards);
      $scope.boards = allBoards;
    });

    $scope.addPinToBoard = function (boardId) {
       console.log('board is: ', boardId);
        $scope.addJinToBoard.uid = user;
        $scope.addJinToBoard.boardid = boardId;
        $scope.addJinToBoard.email = userEmail;
        $scope.addJinToBoard.displayName = displayName;

        console.log('Adding Jin to board: ', $scope.addJinToBoard);
      
        FirebaseStorage.addNewJin($scope.addJinToBoard).then(function (comeback){
            $window.alert("You sucessfully added a pin to your board!");
        });

    };


});
