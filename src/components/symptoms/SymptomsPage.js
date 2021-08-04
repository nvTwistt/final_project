import React, { useEffect, useState } from "react";
// import "components/style.css";
import SymptomList from "./SymptomList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function SymptomsPage(props) {

  return (
    <container>
          <SymptomList/>
          <button className="diagnosis-button">Diagnose It!!</button>
    </container>

  );
}
