import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./SymptomList.css";
import humanBody from "./human_body.png";

export default function SymptomList(props) {
  return (
    <div className="human-body-button">
      <span className="add-symptom-button" id="Abdomen,Pelvis & Buttocks"  onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Abdomen,Pelvis & Buttocks
      </span>
      <span className="add-symptom-button" id="Arms & Shoulders"  onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Arms & Shoulders
      </span>
      <span className="add-symptom-button" id="Chest & Back"  onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Chest & Back
      </span>{" "}
      <span className="add-symptom-button" id="Head, Throat and Neck" onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Head, Throat and Neck
      </span>{" "}
      <span className="add-symptom-button" id="Legs" onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Legs
      </span>{" "}
      <span className="add-symptom-button" id="Skin, Joints & General" onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Skin, Joints & General
      </span>{" "}
      <img src={humanBody} alt={"humanBody"} />
    </div>
  );
}
