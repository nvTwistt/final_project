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
    const token = auth.api_medic_auth;
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