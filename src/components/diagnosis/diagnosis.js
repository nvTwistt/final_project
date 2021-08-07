import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const diagnoseUser = require('../../apiRequests/diagnose');


export default function Diagnosis(props) {
  let data = useLocation();
  let [state, setState] = useState({
    diagnosis: "sprained ankle", specialist: "general"
  })
  useEffect(() => {
    
  })
  // const getSymptomsArray = (data) => {
  //   let symptomsArray = [];
  //   for (let ele of data) {
  //     symptomsArray.push(ele.symptom);
  //   }
  //   console.log(symptomsArray);
  //   return symptomsArray;
  // };

  

  const getDiagnosis = async () => {
    const bodyLocations  = require('../../components/helpers/selectors')
    const bodyObj = require('../../backend/symptoms');
    const diagnosisResponse = require('../helpers/resFormat');
    console.log("SEND SYMPTOMS TO API");

    console.log("HARD CODED - This is where the api call will go")
    
    const stateDataObject = data.state.symptoms[0];
    console.log("object: ", stateDataObject);
    const getBodyPart = stateDataObject['bodyPart'];

    const bodyTraversal = (areaID, subAreaID) => {
      const humanBody = bodyObj.body;
      if (areaID && subAreaID) {
        const symptomObj =humanBody[areaID][subAreaID]; //obj
        const currentSymptoms = stateDataObject['symptom']
        const localSymptomID = symptomObj[currentSymptoms];
        console.log("symptom id: ", localSymptomID);
        return localSymptomID;
      }
    }

    const getSublocationID = (object) => {
      const getSubLocation = stateDataObject['subLocation'];
      console.log("sublocation: ", getSubLocation);
      //is sublocation id
      const getSublocationValue = object[getSubLocation];
      console.log("sublocation result: ", getSublocationValue);
      return getSublocationValue
    }

    const subLocationItems = () =>{
      //const bodySubLocation = bodyLocations.bodyPartNames;
      const subLocationResult = bodyLocations.bodyPartNames;
      console.log("body part: ",getBodyPart);
      const bodyPartValue = subLocationResult[getBodyPart];
      const bodyPartIDNumber = bodyPartValue[0]
      console.log("test: ", bodyPartValue);
      const subLocationObject = bodyPartValue[1]
      const locationValue = getSublocationID(subLocationObject);
      console.log("location value: ", locationValue);
      const symptomValue = bodyTraversal(bodyPartIDNumber, locationValue)
      //console.log("ids: ",symptomID)
      //const diagnosisReport = diagnosisResponse.formatter(symptomID);
      //console.log("formatted report: ", diagnosisReport);
      return symptomValue;
    }
    
    //get the subitems such as foot. ankle from legs
    //const bodyPartSubLocation = subLocationItems();
    const symptomValues = subLocationItems()
    const symptomID = symptomValues[0];
    const symptomFlag = symptomValues[1];
    let response = await diagnoseUser.generic_api_call(symptomID);
    console.log("response from await: ", response);
    if (response) {
      const diagnosisReport = diagnosisResponse.formatter(response);
      return diagnosisReport
      console.log("the formatted report: ", diagnosisReport)
    }
    // let returnObj = {diagnosis: "sprained ankle", specialist: "general"}
    // return returnObj
  };
  
  return (
    <div className="diagnosis">
      <h2>
      {/* {`Symptoms: ${getSymptomsArray(
        data.state.symptoms 
      )}`} */}
        </h2>
        <h2>{`Diagnosis: ${getDiagnosis()[0]}`}</h2>
        <h2>{`Specialist: ${getDiagnosis().specialist}`}</h2>
        <button>BOOK NOW</button>
    </div>

  );
}
