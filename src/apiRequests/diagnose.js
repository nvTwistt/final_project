const axios = require('axios')

const getDiagnosis = function (id) { 
    var baseUrl = 'https://sandbox-healthservice.priaid.ch/';
    var diagnosisUrl = baseUrl + 'diagnosis';
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im10YW1rZWVAaWNsb3VkLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTQ3NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0wNy0zMCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjI4MjgxNzAxLCJuYmYiOjE2MjgyNzQ1MDF9.8Bl_0UMcB8K9VIiw6ZvcjGCE1BUN2JK1W7wC86EzjBk';
    // var extraArgs = 'token=' + token + '&language=' + 'en-gb' + '&format=' + 'json'

    var url = diagnosisUrl + '?symptoms=' + `[${id}]` + '&gender=' + 'male' + '&year_of_birth=' + 1988;
    console.log(url);
    return url;
    //generic_api_call(url)
}


function generic_api_call(id) {
    let url = getDiagnosis(id)
    console.log("this is the url: ", url);
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im10YW1rZWVAaWNsb3VkLmNvbSIsInJvbGUiOiJVc2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOTQ3NiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvdmVyc2lvbiI6IjIwMCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGltaXQiOiI5OTk5OTk5OTkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJQcmVtaXVtIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9sYW5ndWFnZSI6ImVuLWdiIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9leHBpcmF0aW9uIjoiMjA5OS0xMi0zMSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcHN0YXJ0IjoiMjAyMS0wNy0zMCIsImlzcyI6Imh0dHBzOi8vc2FuZGJveC1hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjI4NDQyOTE2LCJuYmYiOjE2Mjg0MzU3MTZ9.N136IvDWHt92J4YiN-Sv7MBynQlr-MtksZa4UPsyAUM';
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