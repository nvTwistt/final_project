import React, { useEffect, useState } from "react";
import SymptomList from "./SymptomList";
import Diagnosis from "../diagnosis/diagnosis"
import "./SymptomsPage.css";

export default function SymptomsPage(props) {

  const getDiagnosis = (props) => {
    console.log(props)
    console.log("clicked")
  };


  return (
    <form className="symptom-form">
      <input className="diagnosis-button" onClick={()=>getDiagnosis} type="submit" value="Get Diagnosis" />
      <SymptomList />
    </form>
  );
}
