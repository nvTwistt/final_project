import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SymptomForm.css";
// import "components/style.css";

export default function SymptomForm(props) {
  //need to get symptoms for each body part from API
  //for now will hard code
  const [symptom, setSymptom] = useState("");
  return (
    <li className="symptom-item">
      <label>
        Body Part:
        <select>
          <option value="legs">legs</option>
        </select>
      </label>
      <label>
        Sublocation:
        <select>
          <option value="ankles">ankles</option>
        </select>
      </label>
      <label>
        Symptom:
        <select
          value={symptom}
          onChange={(e) => {
            console.log(e.target.value)
            setSymptom(e.target.value);
            props.onChange(e.target.value);
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
