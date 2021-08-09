import React from "react";
import SymptomForm from "./SymptomForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./SymptomList.css";
import humanBody from "./human_body.png"
import HumanBodyButton from "./HumanBodyButton"
export default function SymptomList(props) {
  console.log("symptomList props", props.symptomList)
  return (
    <section className="symptoms-list">
      <HumanBodyButton addToSymptomList={props.addToSymptomList} />
      <ul className="symptom-container">
        {props.symptomList.map((list, index) => {
          return (
            <SymptomForm
              index={index}
              onChange={(bodyPart, subLocation, symptom) =>
                props.editSymptoms(index, bodyPart, subLocation, symptom)
              }
              defaultValue = {props.symptomList[index]["bodyPart"]}
              delSymptom={props.deleteFromSymptomsList}
              finalSymptomIDArray = {props.finalSymptomIDArray}
            />
          );
        })}
      </ul>
    </section>
  );
}
