import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SymptomForm.css";
// import "components/style.css";

export default function SymptomForm(props) {
  //need to get symptoms for each body part from API
  //for now will hard code
  const [state, setState] = useState({
    bodyPart: "legs",
    subLocation: "ankles",
    symptom: "swollen",
  });
  console.log("State Changed:", state);
  return (
    <li className="symptom-item">
      <label>
        Body Part:
        <select
          value={state.bodyPart}
          onChange={(e) => {
            let bodyPart = e.target.value;
            console.log(
              `Event on Body Part ${props.index}. Value changed to:`,
              e.target.value
            );
            setState({ ...state, bodyPart });
            props.onChange(e.target.value, null, null);
          }}
        >
          <option value="legs">legs</option>
          <option value="arms">arms</option>
        </select>
      </label>
      <label>
        Sublocation:
        <select
          value={state.subLocation}
          onChange={(e) => {
            let subLocation = e.target.value;
            console.log(
              `Event on subLocation ${props.index}. Value changed to:`,
              e.target.value
            );
            setState({ ...state, subLocation });
            props.onChange(null, e.target.value, null);
          }}
        >
          <option value="ankles">ankles</option>
          <option value="wrist">wrist</option>
        </select>
      </label>
      <label>
        Symptom:
        <select
          value={state.symptom}
          onChange={(e) => {
            let symptom = e.target.value;
            console.log(
              `Event on Symptom ${props.index}. Value changed to:`,
              e.target.value
            );
            setState({ ...state, symptom });
            props.onChange(null, null, e.target.value);
          }}
        >
          <option value="swollen">swollen</option>
          <option value="bruised">bruised</option>
        </select>
      </label>
      <span className="delete-symptom-button">
        <FontAwesomeIcon
          onClick={() => props.delSymptom(props.index)}
          icon={faTrash}
        />
      </span>
    </li>
  );
}
