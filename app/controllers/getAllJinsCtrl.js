'use strict';

app.controller('getAllJinsCtrl', function($scope, AuthFactory, FirebaseStorage) {

    FirebaseStorage.getAllJins()
    .then(function(allJins){
        console.log(allJins);
        $scope.allUserJins = allJins;
    });

});