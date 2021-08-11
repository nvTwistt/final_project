import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./SymptomList.css";
/**
 * Functiohn generates dynamic headings on an image of a human body. These headings are 
 * clickable so that users can click on heading and add that specific body locaion.
 * @param {*} props 
 * @returns 
 */
export default function SymptomList(props) {

  return (
    <div className="human-body-button">
      <span className="add-symptom-button abd" id="Abdomen, pelvis & buttocks"  onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Abdomen,Pelvis & Buttocks
      </span>
      <span className="add-symptom-button arm" id="Arms & shoulder"  onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Arms & Shoulders
      </span>
      <span className="add-symptom-button chest" id="Chest & back"  onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Chest & Back
      </span>{" "}
      <span className="add-symptom-button head" id="Head, throat & neck" onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Head, Throat and Neck
      </span>{" "}
      <span className="add-symptom-button legs" id="Legs" onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Legs
      </span>{" "}
      <span className="add-symptom-button gen" id="Skin, joints & general" onClick={e =>props.addToSymptomList(e.currentTarget.id)}>
        <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
        Skin, Joints & General
      </span>{" "}
    </div>
  );
}
