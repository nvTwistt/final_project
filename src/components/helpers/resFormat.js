const json = [
  {
    "Issue": {
      "ID": 104,
      "Name": "Headache",
      "Accuracy": 90,
      "Icd": "G44;R51",
      "IcdName": "Other headache syndromes;Headache",
      "ProfName": "Cephalalgia",
      "Ranking": 1
    },
    "Specialisation": [
      {
        "ID": 15,
        "Name": "General practice",
        "SpecialistID": 3
      },
      {
        "ID": 27,
        "Name": "Neurology",
        "SpecialistID": 45
      }
    ]
  },
  {
    "Issue": {
      "ID": 67,
      "Name": "Sick headache",
      "Accuracy": 83.07692,
      "Icd": "G43",
      "IcdName": "Migraine",
      "ProfName": "Migraine",
      "Ranking": 2
    },
    "Specialisation": [
      {
        "ID": 15,
        "Name": "General practice",
        "SpecialistID": 3
      },
      {
        "ID": 19,
        "Name": "Internal medicine",
        "SpecialistID": 4
      },
      {
        "ID": 27,
        "Name": "Neurology",
        "SpecialistID": 45
      }
    ]
  }
];
/** Desired results 
 * returns: Issue (name, accuracy) specializtion get the top 2 names 
 * [
  * {
  *  diagnosis_1 : {
  *       name: 
  *       accuracy
  *       specializations : [General practice, Internal Medicine]
  *     }
  * },
  * {
  *  diagnosis_2 : {
  *       name: 
  *       accuracy
  *       specializations : [General practice, Internal Medicine]
  *     }
  * }
 * ]
 * 
 * 
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