import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './SymptomItem.css'
// import "components/style.css";


export default function symptomForm(props) {
  //need to get symptoms for each body part from API
  //for now will hard code
  console.log(props)

  return (
    <li class = "symptom-item">
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
        <select>
          <option value="swollen">swollen</option>
        </select>
      </label>
      <span class = "delete-symptom-button"><FontAwesomeIcon onClick={()=>props.delSymptom(props.index)} icon={faTrash} /></span>
    </li>
  );
}
