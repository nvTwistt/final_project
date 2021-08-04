import React, { useEffect, useState } from "react";
import SymptomList from "./SymptomList";
import Diagnosis from "../diagnosis/diagnosis";
import "./SymptomsPage.css";

export default function SymptomsPage(props) {
  const [symptomList, setSymptomList] = useState([]);

  const getDiagnosis = () => {
    console.log(symptomList);
    console.log("clicked");
  };

  const editSymptoms = (index, symptom) => {
    console.log("symptom", symptom);
    console.log("symptomList", symptomList);
    let newSymptomList = symptomList;
    newSymptomList[index]["symptom"] = symptom;
    setSymptomList(newSymptomList);
  };

  const addToSymptomList = () => {
    symptomList.push({
      body_part: "legs",
      sublocation: "ankles",
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
