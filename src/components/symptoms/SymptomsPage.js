import React, { useEffect, useState } from "react";
import SymptomList from "./SymptomList";

export default function SymptomsPage(props) {

  return (
    <container>
          <SymptomList/>
          <button className="diagnosis-button">Diagnose It!!</button>
    </container>

  );
}
