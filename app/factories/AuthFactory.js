"use strict";

app.factory('AuthFactory', function() {

	let currentUser = null;
	let currentUserEmail = null;
	let currentUserDisplayName = null;

	let createUser = function(userObj) {
		return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
	};

	let loginUser = function(userObj) {
		return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
	};

	let logoutUser = function() {
		console.log("logoutUser");
		return firebase.auth().signOut();
	};

	let isAuthenticated = function () {
		return new Promise (function (resolve, reject) {
			firebase.auth().onAuthStateChanged(function (user) {
				if (user){
					currentUser = user.uid;
					currentUserEmail = user.email;
					currentUserDisplayName = user.displayname;
					resolve(true);
				} else {
					resolve(false);
				}
			});
		});
	};

	let getUser = function() {
		return currentUser;
	};

	let getUserEmail = function () {
		return currentUserEmail;
	};

	let getUserDisplayName = function () {
		return currentUserDisplayName;
	};


	let provider = new firebase.auth.GoogleAuthProvider();

	let authWithProvider = function() {
    	return firebase.auth().signInWithPopup(provider);
  	};

	return {
		createUser,
		loginUser,
		logoutUser,
		isAuthenticated,
		getUser,
		authWithProvider,
		getUserEmail,
		getUserDisplayName
	};

});