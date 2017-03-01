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
    });
    /*
    when('/music/addSong', {
        templateUrl: 'template/SongForm-template.html',
        controller: 'SongAddCtrl',
        resolve: {isAuth}
    }).
    when('/music/:songId', {
        templateUrl: 'template/SongDetail-template.html',
        controller: 'SongDetailCtrl',
        resolve: {isAuth}
    }).
    when('/music/:songId/edit', {
        templateUrl: 'template/SongForm-template.html',
        controller: 'SongEditCtrl',
        resolve: {isAuth}
    }); */
});

// Start Firebase Credentials
app.run(($location, FBCreds) => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});
