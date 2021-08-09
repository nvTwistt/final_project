import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./diagnosis.css";
import Button from 'react-bootstrap/Button'
import { Accordion, Card } from "react-bootstrap";
import AppointmentRequest from "../appointments/appointmentRequest"
const diagnoseUser = require('../../apiRequests/diagnose');
const diagnosisResponse = require('../helpers/resFormat');



export default function Diagnosis(props) {
  let data = useLocation();
  let [diagnosis, setDiagnois] = useState("")
  let [list, setList] = useState([]);
  let [selectDiagnosis, setSelectDiagnosis] = useState({})
  const [showForm, setShowForm] = useState(false)
  console.log("DATA is here",data)

  const showFormFunc = ()=> {
    setShowForm(!showForm);
  }

  const renderAccordion = (perc, diag, c) => {
    return (
      
      <Accordion key={diagnosis[1]}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={diagnosis[0]}>
            {diagnosis[0]}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={diagnosis[0]}>
            <Card.Body>
            {`There is a ${diagnosis[1]}% chance that you have a ${diagnosis[0]}.
        Click BOOK NOW to see a doctor that specializes in${diagnosis[2]}`}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  };

  useEffect(() => {
    let mounted = true;
    diagnoseUser.generic_api_call(data.state.diagnosis).then(response => {
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
     return (
       <div className="main">
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
         <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
         <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

         <button class="btn save btn-warning">
           <Link to={{ pathname: "/appointments", state: { diagnosis: diagnosis } }}>Book Now</Link>
         </button>
         <div>
           <Accordion key={diagnosis[1]}>
             <Card>
               <Accordion.Toggle as={Card.Header} eventKey={diagnosis[0]}>
                 {diagnosis[0]}
               </Accordion.Toggle>
               <Accordion.Collapse eventKey={diagnosis[0]}>
                 <Card.Body>
                   {`There is a ${diagnosis[1]}% chance that you have a ${diagnosis[0]}.
        Click BOOK NOW to see a doctor that specializes in${diagnosis[2]}`}
                 </Card.Body>
               </Accordion.Collapse>
             </Card>
           </Accordion>
         </div>
{/* 
         <div class="card">
            <div class="card-body">
            {`There is a ${diagnosis[1]}% chance that you have a ${diagnosis[0]}.
        Click BOOK NOW to see a doctor that specializes in${diagnosis[2]}`}
            </div>
          </div> */}

       </div>
     )

  })
  
  return (
    <div className="diagnosis">
    {diagnosisData}
    </div>
  );
}
