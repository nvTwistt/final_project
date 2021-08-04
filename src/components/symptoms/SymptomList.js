import React, { useEffect, useState } from "react";
// import "components/style.css";
import SymptomForm from "./SymptomForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./SymptomList.css";

export default function SymptomList(props) {
  

  return (
    <section className="symptoms-list">
      <div className="add-symptom-button">
        Add Symptom
        <FontAwesomeIcon onClick={props.addToSymptomList} icon={faPlusCircle} />
      </div>
      <ul>
        {props.symptomList.map((list, index) => {
          return (
            <SymptomForm
              id={list.id}
              index={index}
              onChange={(symptom)=>props.editSymptoms(index, symptom)}
              delSymptom={props.deleteFromSymptomsList}
            />
          );
        })}
      </ul>
    </section>
  );
}
