// import axios from "axios";


// get bodyLocations

const bodyParts = require('../../backend/symptoms')
const bodyPartNames = bodyParts.bodyLocations
// console.log(bodyPartNames)
const bodyPartKeys=Object.keys(bodyPartNames)
//console.log(bodyPartKeys)



// export function getBodyLocations(bodyPartKeys) {
  
//   const resultArray = [];
//   for (const items of bodyPartKeys) {
//       let string = `<option value=${items}>${items}</option>`;
//       resultArray.push(string);
//   }
//   const returnString = resultArray.join("")
//   console.log(returnString);
// }

module.exports = {bodyPartKeys, bodyPartNames};


// //get subLocations for given body location from API
// export function getSubLocations() {
//   const returnObj = {};
//   return returnObj;
// }

// //get symptoms object from API with list of possible symptoms for sub location
// export function getSymptoms() {
//   const returnObj = {};
//   return returnObj;
// }

// //need to add all symptoms into an array and send the array of symptoms to the API. API will return obj of possible symptoms and recommended specialist
// export function getDiagnosis() {
//   const returnObj = {};
//   return returnObj;
// }
