import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
const axios = require("axios");

export default function AppointmentRequest(props) {
  const data = useLocation();
  const [values, setValue] = useState({
    to: "",
    name: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => {
    console.log("OPEN");
    setShow(true);
  };

  //handles the event click to set the sender
  const onHandleTo = (event) => {
    setValue({
      to: event.target.value,
    });
  };
  const onHandleName = (event) => {
    setValue({
      to: values.to,
      name: event.target.value,
    });
  };
  //button that handles the submit function
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("value: ", values);
    console.log("diagnosis: ", data.state.diagnosis);
    let specialists = data.state.diagnosis[2];
    let diagnosisInformation = {
      symptom: data.state.diagnosis[0],
      accuracy: data.state.diagnosis[1],
    };
    const stringFormatter = (value) => {
      return value.toLowerCase();
    };
    if (specialists.length === 2) {
      diagnosisInformation["specialization_1"] = stringFormatter(
        specialists[0]
      );
      diagnosisInformation["specialization_2"] = stringFormatter(
        specialists[1]
      );
    } else if (specialists.length === 1) {
      diagnosisInformation["specialization_1"] = stringFormatter(
        specialists[0]
      );
    }
    let result = {
      name: values.name,
      to: values.to,
    };
    let payload = { info: result, diagnosis: diagnosisInformation };
    // application/x-www-form-urlencoded
    axios
      .post("http://localhost:3001/message", JSON.stringify(payload), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((result) => {
        console.log("result===<<", result);
      })
      .catch((err) => {
        console.log("err:: ", err);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        Number:
        <input
          type="text"
          name="to"
          value={values.to}
          onChange={onHandleTo}
        ></input>
        Name:
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={onHandleName}
        ></input>
      </div>
      <button type="submit" onClick={handleOpen}>
        Submit
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Appointment Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Message to doctor sent successfully, and they will be reaching out to
          you shortly!
        </Modal.Body>
        <Modal.Footer>
          <Link to="/" variant="primary">
            Ok
          </Link>
        </Modal.Footer>
      </Modal>
    </form>
  );
}
