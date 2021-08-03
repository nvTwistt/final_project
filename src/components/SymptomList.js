import React, { useEffect, useState } from "react";
// import "components/style.css";
import SymptomItem from "./SymptomItem";

export default function SymptomForm(props) {

  return (
 
    <section className="interviewers">
      <h4>Add Symptom</h4>
      <ul ><SymptomItem/></ul>
    </section>
  );
}
