'use strict';

app.controller('singlePinViewCtrl', function($scope,$routeParams, AuthFactory, FirebaseStorage, $window) {

    let user = AuthFactory.getUser();

    $scope.addJinToBoard = {};

    FirebaseStorage.getSingleJin($routeParams.jinId).then(function successCallback(response){
        console.log('getSingleItemResponse', response);
        $scope.selectedItem = response;
        $scope.addJinToBoard = response;
    });

    FirebaseStorage.getUserBoards(user).then(function(allBoards) {
      console.log(allBoards);
      $scope.boards = allBoards;
    });

    $scope.addPinToBoard = function (boardId) {
       console.log('board is: ', boardId);
        $scope.addJinToBoard.uid = user;
        $scope.addJinToBoard.boardid = boardId;

        console.log('Adding Jin to board: ', $scope.addJinToBoard);
      
        FirebaseStorage.addNewJin($scope.addJinToBoard).then(function (comeback){
            $window.alert("You sucessfully added a pin to your board!");
            console.log(comeback);
        });

    };


});
