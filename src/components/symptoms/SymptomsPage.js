import React, { useState } from "react";
import SymptomList from "./SymptomList";
import "./SymptomsPage.css";
import { Link } from "react-router-dom";
import Diagnosis from "../diagnosis/diagnosis";
export default function SymptomsPage(props) {
  const [symptomList, setSymptomList] = useState([]);
  const [symptomID, setSymptomID] = useState([]);
  const editSymptoms = (index, bodyPart, subLocation, symptom) => {
    let newSymptomList = symptomList;
    if (bodyPart) {
      newSymptomList[index]["bodyPart"] = bodyPart;
    }

    if (subLocation) {
      newSymptomList[index]["subLocation"] = subLocation;
    }

    if (symptom) {
      newSymptomList[index]["symptom"] = symptom;
    }

    setSymptomList(newSymptomList);
  };

 const finalSymptomIDArray = (array) => {
   console.log("FUNCTION TRIGGERED WITH ARRAY", array)
   setSymptomID(array);
   console.log("state: ", symptomID);
 }


  const addToSymptomList = () => {
    symptomList.push({
      bodyPart: null,
      subLocation: null,
      symptom: null,
    });
    setSymptomList([...symptomList]);
  };

  const hasNullValues = (symptomList)=>{
    //edge case no item has been added yet
    if (symptomList.length ===0){
      return true
    }
    //otherwise loop through array of object until null value is found. Otherwise return true
    for (let ele of symptomList){
      console.log(ele)
      for (let key in ele){
        if (ele[key]===null){
          console.log('null key', key)
          return true
        }
      }
    }
    return false
  }

  const deleteFromSymptomsList = (index) => {
    symptomList.splice(index, 1);
    setSymptomList([...symptomList]);
  };

  console.log("this is the current state: ", symptomList);

  return (
    <form className="symptom-form">
      <Link
        onClick = {(e)=>{
          if(hasNullValues(symptomList)){
            e.preventDefault()
            alert("Ensure all fields in form have been selected")
          }
        }}
        className="diagnosis-button"
        to={{ pathname: "/diagnosis", state: { symptoms: symptomList, diagnosis: symptomID } }}
      >
        Get Diagnosis
      </Link>
      <SymptomList
        editSymptoms={editSymptoms}
        symptomList={symptomList}
        addToSymptomList={addToSymptomList}
        deleteFromSymptomsList={deleteFromSymptomsList}
        finalSymptomIDArray = {finalSymptomIDArray}
      />
    </form>
   );
}
