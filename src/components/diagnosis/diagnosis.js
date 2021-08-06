import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SymptomsPage(props) {
  let data = useLocation();

  const getSymptomsArray = (data) => {
    let symptomsArray = [];
    for (let ele of data) {
      symptomsArray.push(ele.symptom);
    }
    console.log(symptomsArray);
    return symptomsArray;
  };

  const getDiagnosis = () => {
    console.log("SEND SYMPTOMS TO API");
    console.log("HARD CODED - This is where the api call will go")
    let returnObj = {diagnosis: "sprained ankle", specialist: "general"}
    return returnObj
  };

  return (
    <div className="diagnosis">
      <h2>
      {`Symptoms: ${getSymptomsArray(
        data.state.symptoms 
      )}`}
        </h2>
        <h2>{`Diagnosis: ${getDiagnosis().diagnosis}`}</h2>
        <h2>{`Specialist: ${getDiagnosis().specialist}`}</h2>
        <button>BOOK NOW</button>
    </div>

  );
}
