import React, { useEffect, useState } from "react";
import SymptomList from "./SymptomList";
import "./SymptomsPage.css";

export default function SymptomsPage(props) {
  return (
    <div class="symptom-page">
      <button className="diagnosis-button" onClick={()=>console.log("clicked")}>
        Diagnose It!!
      </button>
      <SymptomList />
    </div>
  );
}
