import React, { useState } from "react";
import SymptomList from "./SymptomList";
import "./SymptomsPage.css";
import { Link } from "react-router-dom";
export default function SymptomsPage(props) {
  const [symptomList, setSymptomList] = useState([]);
  const [symptomID, setSymptomID] = useState([]);
  const [gender, setGender]=useState(null)
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
    setSymptomID(array);
  };

  function addToSymptomList(bodyPartClicked) {
    symptomList.push({
      bodyPart: bodyPartClicked,
      subLocation: null,
      symptom: null,
    });
    setSymptomList([...symptomList]);
  }

  const hasNullValues = (symptomList) => {
    //edge case no item has been added yet
    if (symptomList.length === 0) {
      return true;
    }

    if(!gender){
      return true;
    }
    //otherwise loop through array of object until null value is found. Otherwise return true
    for (let ele of symptomList) {
      for (let key in ele) {
        if (ele[key] === null) {
          return true;
        }
      }
    }
    return false;
  };

  const deleteFromSymptomsList = (index) => {
    symptomList.splice(index, 1);
    setSymptomList([...symptomList]);
  };


  return (
    <form className="symptom-form">
  

      <SymptomList
        editSymptoms={editSymptoms}
        symptomList={symptomList}
        addToSymptomList={addToSymptomList}
        deleteFromSymptomsList={deleteFromSymptomsList}
        finalSymptomIDArray={finalSymptomIDArray}
      />
         <div className="gender-select">
         <label> Gender:
        <select onChange={e =>setGender(e.target.value)}>
        <option value={null} >Select</option>
          <option value={"Male"} >Male</option>
          <option value={"Female"}>Female</option>
        </select>
        </label>
      </div>
      <Link
        onClick={(e) => {
          if (hasNullValues(symptomList)) {
            e.preventDefault();
            alert("Ensure all fields in form have been selected");
          }
        }}
        className="diagnosis-button"
        to={{
          pathname: "/diagnosis",
          state: { symptoms: symptomList, diagnosis: symptomID, gender: gender },
        }}
      >
        Get Diagnosis
      </Link>
    </form>
  );
}
