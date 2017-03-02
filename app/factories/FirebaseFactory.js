"use strict";

app.factory("FirebaseStorage", function(FBCreds, $q, $http, AuthFactory) {

    let getAllJins = () => {
        let jins = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json`)
            .then((jinObject) =>{
                let jinCollection = jinObject.data;
                Object.keys(jinCollection).forEach((key)=>{
                    jinCollection[key].id = key;
                    jins.push(jinCollection[key]);
                });
                resolve(jins);
            })
            .catch((error)=> {
                reject(error);
            });
        });
    };

    let getUserJins = (user) => {
        let jins = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/pins.json?orderBy="uid"&equalTo="${user}"`)
            .then((jinObject) =>{
                let jinCollection = jinObject.data;
                Object.keys(jinCollection).forEach((key)=>{
                    jinCollection[key].id = key;
                    jins.push(jinCollection[key]);
                });
                resolve(jins);
            })
            .catch((error)=> {
                reject(error);
            });
        });
    };

    let getUserBoards = (user) => {
        let boards = [];
        return $q((resolve, reject) => {
            $http.get(`${FBCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${user}"`)
            .then((boardObject) =>{
                let boardCollection = boardObject.data;
                Object.keys(boardCollection).forEach((key)=>{
                    boardCollection[key].id = key;
                    boards.push(boardCollection[key]);
                });
                resolve(boards);
            })
            .catch((error)=> {
                reject(error);
            });
        });
    };


    let addNewJin = (newJin) => {
        return $q((resolve, reject)=>{
            $http.post(`${FBCreds.databaseURL}/pins.json`,
                JSON.stringify(newJin))
                .then((ObjectFromFirebase) => {
                    console.log('addNewJin called from FB Factory:', ObjectFromFirebase);
                    resolve(ObjectFromFirebase);
                })
                .catch((error)=>{
                    reject(error);
                });
            });
    };

    let addNewBoard = (newBoard) => {
        return $q((resolve, reject)=>{
            $http.post(`${FBCreds.databaseURL}/boards.json`,
                JSON.stringify(newBoard))
                .then((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .catch((error)=>{
                    reject(error);
                });
            });
    };

    let getSingleJin = (jinId) => {
        return $q(function(resolve, reject){
            $http.get(`${FBCreds.databaseURL}/jins/${jinId}.json`)
            .then(function(jinObject){
                resolve(jinObject.data);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

    let getSingleBoard = (boardId) => {
        return $q(function(resolve, reject){
            $http.get(`${FBCreds.databaseURL}/boards/${boardId}.json`)
            .then(function(jinObject){
                resolve(jinObject.data);
            })
            .catch(function(error){
                reject(error);
            });
        });
    };

    return {getAllJins, getUserJins, addNewJin, addNewBoard, getSingleBoard, getSingleJin};

});
