import React, { useState } from "react";
import SymptomList from "./SymptomList";
import "./SymptomsPage.css";
import { Link } from "react-router-dom";
import Diagnosis from "../diagnosis/diagnosis";
export default function SymptomsPage(props) {
  const [symptomList, setSymptomList] = useState([]);
  const [currentState, setCurrentState] = useState("symptom");
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


  const addToSymptomList = () => {
    symptomList.push({
      bodyPart: "legs",
      subLocation: "ankles",
      symptom: "swollen",
    });
    setSymptomList([...symptomList]);
  };

  const deleteFromSymptomsList = (index) => {
    symptomList.splice(index, 1);
    setSymptomList([...symptomList]);
  };


  return (
    <form className="symptom-form">
      <Link onClick={() => setCurrentState('diagnosis')}
        className="diagnosis-button"
        to={{ pathname: "/diagnosis", state: { symptoms: symptomList } }}
      >
        Get Diagnosis
      </Link>
      <SymptomList
        editSymptoms={editSymptoms}
        symptomList={symptomList}
        addToSymptomList={addToSymptomList}
        deleteFromSymptomsList={deleteFromSymptomsList}
      />
    </form>
   );
}
