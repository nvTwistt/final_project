import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AppointmentRequest from "../appointments/appointmentRequest"
const diagnoseUser = require('../../apiRequests/diagnose');
const diagnosisResponse = require('../helpers/resFormat');



export default function Diagnosis(props) {
  let data = useLocation();
  let [diagnosis, setDiagnois] = useState("")
  let [list, setList] = useState([]);
  let [selectDiagnosis, setSelectDiagnosis] = useState({})


  console.log("Gender is here",data.state.gender)


  useEffect(() => {
    let mounted = true;
    diagnoseUser.generic_api_call(data.state.diagnosis, data.state.gender).then(response => {
      const diagnosisReport = diagnosisResponse.formatter(response)
      // console.log("does this work: ",submitDiagnosis.default(diagnosisReport));
      console.log('-----', diagnosisReport);
      const reportLength = diagnosisReport.length;
      let results = []
      for (const reports of diagnosisReport) {
        if (results.length > 2) {
          break;
        }
        let unformattedName = reports.name
        let diagnosisName = unformattedName.toLowerCase();
        let accuracyNumber = reports.accuracy;
        let specializtionList = reports.specializations;
        let diagnosisList = [diagnosisName, accuracyNumber, specializtionList];
        results.push(diagnosisList);
      }
      if(mounted) {
        setList(results)
      }
    })
    return () => mounted = false;
  }, []);
  
  console.log("list to format: ", list);
  const diagnosisData = list.map(diagnosis => {
     return <h2>
      {`There is a ${diagnosis[1]}% chance that you have a ${diagnosis[0]}.
       Click BOOK NOW to see a doctor that specializes in ${diagnosis[2]}`}
      <Link to={{ pathname: "/appointments", state: { diagnosis: diagnosis } }}>BOOK NOW</Link>
      </h2>
  })
  
  return (
    <div className="diagnosis">
    {diagnosisData}
    </div>
  );
}
