import React, { useEffect, useState } from "react";
import SymptomList from "./SymptomList";
import Diagnosis from "../diagnosis/diagnosis";
import "./SymptomsPage.css";

export default function SymptomsPage(props) {
  const [symptomList, setSymptomList] = useState([]);
  console.log("*******symptomList", symptomList);

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

  const getDiagnosis = () => {
    console.log("SEND SYMPTOMS TO API");
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
      <div className="diagnosis-button" onClick={() => getDiagnosis()}>
        Get Diagnosis
      </div>
      <SymptomList
        editSymptoms={editSymptoms}
        symptomList={symptomList}
        addToSymptomList={addToSymptomList}
        deleteFromSymptomsList={deleteFromSymptomsList}
      />
    </form>
  );
}
