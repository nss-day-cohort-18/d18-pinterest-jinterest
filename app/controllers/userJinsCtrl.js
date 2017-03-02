'use strict';

app.controller('userJinsCtrl', function ($scope, AuthFactory, FirebaseStorage, FilterFactory) {

    $scope.searchText = FilterFactory;
    let user = AuthFactory.getUser();

    FirebaseStorage.getUserJins(user).then(function (userJinList) {
    	console.log(userJinList);
    	$scope.userJins = userJinList;
    });

});