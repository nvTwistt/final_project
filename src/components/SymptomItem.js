import React, { useEffect, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
// import "components/style.css";


export default function symptomForm(props) {
  //need to get symptoms for each body part from API
  //for now will hard code
  console.log(props)

  return (
    <li>
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
      <Button onClick={()=>props.delSymptom(props.index)}>Delete Symptom</Button>
    </li>
  );
}
