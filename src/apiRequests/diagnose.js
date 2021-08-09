const axios = require('axios')
const auth = require('../secrets/data')
const getDiagnosis = function (id) { 
    var baseUrl = 'https://sandbox-healthservice.priaid.ch/';
    var diagnosisUrl = baseUrl + 'diagnosis';
    const token = auth.api_medic_auth;
    // var extraArgs = 'token=' + token + '&language=' + 'en-gb' + '&format=' + 'json'

    var url = diagnosisUrl + '?symptoms=' + `[${id}]` + '&gender=' + 'male' + '&year_of_birth=' + 1988;
    console.log(url);
    return url;
    //generic_api_call(url)
}


function generic_api_call(id) {
    let url = getDiagnosis(id)
    console.log("this is the url: ", url);
    const token = auth.api_medic_auth;
    var extraArgs = 'token=' + token + '&language=' + 'en-gb' + '&format=' + 'json'
    url += url.indexOf("?") > 0 ? "&" + extraArgs : "?" + extraArgs;
    console.log('url====> ', url)
    return axios.get(url)
        .then(function (response) {
            console.log("We are here::: ",response.data);
            return response.data
        })
        .catch(function (error) {
            console.log("There is an error");
        });
}
module.exports = {getDiagnosis, generic_api_call}