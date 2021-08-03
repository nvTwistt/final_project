import React, { useEffect, useState } from "react";
// import "components/style.css";
import SymptomItem from "./SymptomItem";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function SymptomList(props) {
  const [symptomList, setSymptomList] = useState([]);

  const addToSymptomList = () => {
    symptomList.push(symptomList.length + 1);
    console.log(symptomList);
    setSymptomList([...symptomList]);
  };

  const deleteFromSymptomsList = (index) => {
    symptomList.splice(index, 1);
    setSymptomList([...symptomList]);
  };

  return (
    <section>
      <ul>
        {symptomList.map((list, index) => {
          return (
            <SymptomItem index={index} delSymptom={deleteFromSymptomsList} />
          );
        })}
      </ul>
      <Button onClick={addToSymptomList}> <FontAwesomeIcon icon={faPlusCircle} />Add Symptom</Button>
    </section>
  );
}
