'use strict';

var app = angular.module('jInterest', ["ngRoute"]);

//used to authenticate user when navigating to other views
let isAuth = (AuthFactory) => new Promise ( (resolve, reject) => {
    AuthFactory.isAuthenticated()
    .then ( (userExists) => {
    console.log("userExists", userExists);
        if (userExists){
      console.log("Authenticated, go ahead.");
            resolve();
        } else {
      console.log("Authentication rejected, go away.");
            reject();
        }
    });
});

app.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/login.html',
        controller: 'userCtrl'
    }).
    when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'userCtrl'
    }).
    when('/logout', {
        templateUrl: 'partials/login.html',
        controller: 'userCtrl'
    }).
    when('/jinterest/imgSearch', {
        templateUrl: 'partials/imgSearch.html',
        controller: 'pinCtrl',
        resolve: {isAuth}
    }).
    when('/jinterest/addNewPin', {
        templateUrl: 'partials/addNewPin.html',
        controller: 'newPinCtrl',
        resolve: {isAuth}
    }).
    when('/jinterest/jinList', {
        templateUrl: 'partials/defaultLoginViewAllJins.html',
        controller: 'getAllJinsCtrl',
        resolve: {isAuth}
    }).
    when('/jinterest/myJinList', {
        templateUrl: 'partials/userJinList.html',
        controller: 'userJinsCtrl',
        resolve: {isAuth}

    }).
    when('/jinterest/myJinList/:jinId', {
        templateUrl: 'partials/singlePinView.html',
        controller: 'singlePinViewCtrl',
        resolve:{isAuth}
    }).
    when('/jinterest/addNewBoard', {
        templateUrl: 'partials/newBoard.html',
        controller: 'newBoardCtrl',
        resolve: {isAuth}
    }).
    otherwise("/");
});


app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});
