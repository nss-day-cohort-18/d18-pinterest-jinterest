'use strict';

app.factory('ApiSearchFactory', ($q, $http, FBCreds) => {

    let bingImageSearch = (function (searchString) {
        return $q (function (resolve, reject) {
            $http.get(`https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${searchString}`,
            {
                headers: { 'Ocp-Apim-Subscription-Key' : FBCreds.bingApiKey }

            }
            ).then(function (imageResults) {
                /* ANYTHING TO DO HERE */
                resolve (imageResults);

            }).catch(function (error) {
                reject (error);
            });
        });
    });

    return {bingImageSearch};

});