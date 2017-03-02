'use strict';

app.factory('ApiSearchFactory', ($q, $http, FBCreds) => {

    let bingImageSearch = (function (searchString) {
        return $q (function (resolve, reject) {
            $http.get(`https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${searchString}&count=18&mkt=en-US`,
            {
                headers: { 'Ocp-Apim-Subscription-Key' : FBCreds.bingApiKey }

            }
            ).then(function (imageResults) {
                var imageResultsMassaged = imageResults.data.value;
                resolve (imageResultsMassaged);

            }).catch(function (error) {
                reject (error);
            });
        });
    });

    return {bingImageSearch};

});
