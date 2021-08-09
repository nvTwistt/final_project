/**
 * This file bridges the gap between the front end and the backend
 */
const bodyParts = require('../../backend/symptoms')
const bodyPartNames = bodyParts.bodyLocations
const bodyPartKeys=Object.keys(bodyPartNames)
module.exports = {bodyPartKeys, bodyPartNames};
