import React, { useEffect, useState } from "react";
// import "components/style.css";
import SymptomItem from "./SymptomItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import './SymptomList.css'

export default function SymptomList(props) {
  const [symptomList, setSymptomList] = useState([]);

  const addToSymptomList = () => {
    symptomList.push(symptomList.length + 1);
    setSymptomList([...symptomList]);
  };

  const deleteFromSymptomsList = (index) => {
    symptomList.splice(index, 1);
    setSymptomList([...symptomList]);
  };
  
  return (
    <section className="symptoms-list">
      <div className = "add-symptom-button">Add Symptom<FontAwesomeIcon onClick={addToSymptomList} icon={faPlusCircle}/></div>
      <ul>
        {symptomList.map((list, index) => {
          return (
            <SymptomItem 
            index={index} 
            delSymptom={deleteFromSymptomsList} 
            bodyPart={"bodyPart"} 
            subLocation ={"subLocation"}
            symptom = {"symptom"}/>
          );
        })}
      </ul>
    </section>
  );
}
