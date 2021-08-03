import React, { useEffect, useState } from "react";
// import "components/style.css";
import SymptomItem from "./SymptomItem";
import Button from "./Button";

export default function SymptomList(props) {
  const [symptomList, setSymptomList] = useState([1, 2]);

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
        {/* <SymptomItem /> */}
      </ul>
      <Button onClick={addToSymptomList}>Add Symptom</Button>
    </section>
  );
}
