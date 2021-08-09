const axios = require('axios')
const auth = require('../secrets/data')
/**
 * function takes in an ID and sets the request URL
 * @param {} id 
 * @returns 
 */
const getDiagnosis = function (id) { 
    var baseUrl = 'https://sandbox-healthservice.priaid.ch/';
    var diagnosisUrl = baseUrl + 'diagnosis';
    var url = diagnosisUrl + '?symptoms=' + `[${id}]` + '&gender=' + 'male' + '&year_of_birth=' + 1988;
    return url;
}

/**
 * function will construct the url needed for the request and will call the api
 * @param {*} id 
 * @returns 
 */
function generic_api_call(id) {
    let url = getDiagnosis(id)
    console.log("this is the url: ", url);
<<<<<<< HEAD
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Imx1a2VAY2xpY2tzcGFjZS5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6Ijk1MDIiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjEtMDgtMDQiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTYyODU0NTc0MiwibmJmIjoxNjI4NTM4NTQyfQ.mnkQudshPy0BkX3jsHa217Yq8G2xkEh9K2TknjcHORY';
=======
    const token = auth.api_medic_auth;
>>>>>>> d4dbd85861690475691a66963c4b2643bfc23aa9
    var extraArgs = 'token=' + token + '&language=' + 'en-gb' + '&format=' + 'json'
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;
    console.log('url====> ', url)
    return axios.get(url)
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            console.log("There is an error", error);
        });
}
module.exports = {getDiagnosis, generic_api_call}