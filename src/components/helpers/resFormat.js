/**
 * Function takes in a an array of objects, parses the contents that are wanted and returns
 * a list of objects containing the wanted data
 * @param {Json formatted datastructure} arr 
 * @returns JSON formatted datastructure
 */
const formatter = (arr) => {
  let returnArr = [];
  for(let diag of arr){
      if (returnArr.length === 2) {
          break;
      }
    const name = diag.Issue.Name
    const acc = diag.Issue.Accuracy
    let specArray = [];
    if(diag.Specialisation.length >= 2){
      specArray.push(diag.Specialisation[0].Name)
      specArray.push(diag.Specialisation[1].Name)
    }
    else {
      specArray.push(diag.Specialisation[0].Name)
    }
    const diagnosisObj = {
      name: name,
      accuracy: acc,
      specializations: specArray
    }
    returnArr.push(diagnosisObj);
  }
  return returnArr;
}

module.exports = {formatter}