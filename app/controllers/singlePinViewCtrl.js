'use strict';

app.controller('singlePinViewCtrl', function($scope,$routeParams, AuthFactory, FirebaseStorage) {
  
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
        $scope.addJinToBoard.boardid = boardId;
        console.log('WE ARE ADDING: ', $scope.addJinToBoard);

        FirebaseStorage.addNewJin($scope.addJinToBoard).then(function (comeback){
          console.log(comeback);
        });
       
    };


});

