import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SymptomForm.css";

export default function SymptomForm(props) {
  //need to get symptoms for each body part from API
  //for now will hard code
  console.log("props for symptom form", props.defaultValue)
  const [state, setState] = useState({
    bodyPart: props.defaultValue,
    subLocation: null,
    symptom: null,
  });
  console.log("State Changed:", state);



  const bodyLocations = require('../../components/helpers/selectors');
  const bodyObj = require('../../backend/symptoms');
  //const submitDiagnosis = require('../diagnosis/diagnosis')
  //function for mapping the names of body parts to creating an item
  console.log("testing", state.bodyPart);

  //function that finds the sublocation and returns the id's of corresponding parts
  const subLocationItems = () =>{
    //const bodySubLocation = bodyLocations.bodyPartNames;
    console.log("the location: ",bodyLocations.bodyPartNames)
    const subLocationResult = bodyLocations.bodyPartNames[state.bodyPart];
    console.log("test: ", subLocationResult);
    return subLocationResult;
  }
  
  //get the subitems such as foot. ankle from legs
  const bodyPartSubLocation = subLocationItems();
  console.log("body keys: ", bodyPartSubLocation);
  //get the object of all sublocation body parts and get its keys
  const subLocationKeys = Object.keys(bodyPartSubLocation[1]);
  //function maps the keys to options in the dropdown menu
  const SubLocationItems = subLocationKeys.map(function(item){
    return <option value={item}>{item}</option>
  })

  //function gets treverses through the body object to get the symptoms correlating to its sublocation
  //returns the symptoms key
  const symptomItems = () => {
    const accessBodyLocationObject = bodyLocations.bodyPartNames[state.bodyPart][1];
    const accessSubLocationValues = accessBodyLocationObject[state.subLocation];
    return accessSubLocationValues;
  }
  //SUBLOCATION ID
  const sublocationValue = symptomItems();
  console.log("location: ", bodyPartSubLocation[0])
  console.log("SublocationValue: ", sublocationValue);
  // BODY PART ID
  const locationID = bodyPartSubLocation[0];
  const symptoms = bodyObj.body[locationID][sublocationValue]
  /**
   * 
   * @param {gets the keys for the symptoms} value 
   * @returns 
   */
  const symptomKeyFinder = (value) => {
    if (value) {
      const symptomKeys = Object.keys(value).map(function(item){
        return <option value={item}>{item}</option>
      })
      return symptomKeys
    }
    else {
      return <option value="pending">Select Sublocation</option>
    }
  }
    //function takes in the body object and gets the symptomID 
   const symptomID = (bodyObject) => {
    console.log("new state symptoms: ", state.symptom);
    // returns list of the body part id and an obj of its sub body parts
    // example) [16, {arm: 5}]
    const bodyPartSubLocation = subLocationItems();
    const locationID = bodyPartSubLocation[0];
    // returns the sublocation ID 
    const sublocationValue = symptomItems();
    console.log("keys for body object: ",locationID, sublocationValue);
    if (sublocationValue !== undefined && locationID) {
      const symptomObj = bodyObject.body[locationID][sublocationValue]; //obj
      const symptomIDValue = symptomObj[state.symptom];
      console.log("id value: ", symptomIDValue);
      if (symptomIDValue) {
        return symptomIDValue[0];
      }
      
    }
   //console.log("body obj", bodyObject.body[16][36] )
  }
  const getSymptomID = symptomID(bodyObj);
  
  props.finalSymptomIDArray(getSymptomID)
  console.log("Symptom ID: ", getSymptomID);
  //call the api with the symptoms ID and it returns the response.
  // diagnoseUser.generic_api_call(getSymptomID).then(response => {
  //   const diagnosisReport = diagnosisResponse.formatter(response)
  //   // console.log("does this work: ",submitDiagnosis.default(diagnosisReport));
  //   console.log('-----', diagnosisReport);
  // })

  // console.log("lets get it: ");
  return (
    
    <li className="symptom-item">
      <label>
        <strong>Location:</strong>
        <div
          value={state.bodyPart}
          onChange={(e) => {
            let bodyPart = e.target.value;
            console.log(
              `Event on Body Part ${props.index}. Value changed to:`,
              e.target.value
            );
            setState({ ...state, bodyPart });
            props.onChange(e.target.value, null, null);
          }}
        >
          {props.defaultValue}
          {/* {bodyPartitems} */}
        </div>
      </label>
      <label>
        <strong>Sub-Location:</strong>
        <br/>
        <select
          value={state.subLocation}
          onChange={(e) => {
            let subLocation = e.target.value;
            console.log(
              `Event on subLocation ${props.index}. Value changed to:`,
              e.target.value
            );
            setState({ ...state, subLocation });
            props.onChange(null, e.target.value, null);
          }}
        >
          <option value= {null}>Select an option</option>
          {SubLocationItems}
          {/* <option value="ankles">ankles</option>
          <option value="wrist">wrist</option> */}
        </select>
      </label>
      <label>
        <strong>Symptom:</strong>
        <br/>
        <select
          value={state.symptom}
          onChange={(e) => {
            let symptom = e.target.value;
            console.log(
              `Event on Symptom ${props.index}. Value changed to:`,
              e.target.value
            );
            setState({ ...state, symptom });
            props.onChange(null, null, e.target.value);
          }}

        >
          <option value= {null}>Select an option</option>
          {symptomKeyFinder(symptoms)}
          {/* <option value="swollen">swollen</option>
          <option value="bruised">bruised</option> */}
        </select>
      </label>
      <div className="delete-symptom-button">
        <FontAwesomeIcon
          onClick={() => props.delSymptom(props.index)}
          icon={faTrash}
        />
      </div>
    </li>
  );
}
