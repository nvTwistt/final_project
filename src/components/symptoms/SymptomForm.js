import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SymptomForm.css";

export default function SymptomForm(props) {
  //need to get symptoms for each body part from API
  //for now will hard code
  const [state, setState] = useState({
    bodyPart: "Abdomen, pelvis & buttocks",
    subLocation: "Abdomen",
    symptom: "Abdominal pain",
  });
  console.log("State Changed:", state);

  const bodyLocations = require('../../components/helpers/selectors')
  const bodyObj = require('../../backend/symptoms')

  const bodyPartitems = bodyLocations.bodyPartKeys.map(function(item){
    return <option value={item}>{item}</option>
  })
  console.log("testing", state.bodyPart);

  const subLocationItems = () =>{
    //const bodySubLocation = bodyLocations.bodyPartNames;
    const subLocationResult = bodyLocations.bodyPartNames[state.bodyPart];
    console.log("test: ", subLocationResult[1]);
    return subLocationResult;
  }
  
  const bodyPartSubLocation = subLocationItems();
  const subLocationKeys = Object.keys(bodyPartSubLocation[1]);
  // console.log("sub: ", bodyPartSubLocation);
  const SubLocationItems = subLocationKeys.map(function(item){
    return <option value={item}>{item}</option>
  })
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
  
  const symptomID = (bodyObject) => {
    console.log("new state symptoms: ", state.symptom);
    // returns list of the body part id and an obj of its sub body parts
    // example) [16, {arm: 5}]
    const bodyPartSubLocation = subLocationItems();
    const locationID = bodyPartSubLocation[0];
    // returns the sublocation ID 
    const sublocationValue = symptomItems();
    console.log("value: ",locationID, sublocationValue);
    if (sublocationValue !== undefined && locationID) {
      const symptomObj = bodyObject.body[locationID][sublocationValue]; //obj
      const symptomIDValue = symptomObj[state.symptom];
      if (symptomIDValue) {
        return symptomIDValue[0];
      }
      
    }
   //console.log("body obj", bodyObject.body[16][36] )
  }
  const getSymptomID = symptomID(bodyObj);
  console.log("This is the ID: ", getSymptomID);
  const findKeyByValue = function (object, value){
    for(const key in object){
      if(object[key] === value){
        return key;
      }
    }
  }

  // const symptomKeys = Object.keys(symptoms).map(function(item){
  //   return <option value={item}>{item}</option>
  // })
  //console.log("please work! :", symptoms);
  return (
    
    <li className="symptom-item">
      <label>
        Body Part:
        <select
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
          {bodyPartitems}
        </select>
      </label>
      <label>
        Sublocation:
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
        Symptom:
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
      <span className="delete-symptom-button">
        <FontAwesomeIcon
          onClick={() => props.delSymptom(props.index)}
          icon={faTrash}
        />
      </span>
    </li>
  );
}
