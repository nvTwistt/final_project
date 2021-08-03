import React, { useEffect, useState } from "react";
// import "components/style.css";

export default function symptomForm(props) {
  //need to get symptoms for each body part from API
  //for now will hard code

  return (
    <li>
      <label>
        Body Part:
        <input type="text" name="body-part" />
      </label>
      <label>
        Symptom:
        <input type="text" name="symptom" />
      </label>
    </li>
  );
}
