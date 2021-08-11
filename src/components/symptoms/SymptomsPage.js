import React, { useState } from "react";
import SymptomList from "./SymptomList";
import "./SymptomsPage.css";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton, Modal, Button } from "react-bootstrap";
export default function SymptomsPage(props) {
  const [symptomList, setSymptomList] = useState([]);
  const [symptomID, setSymptomID] = useState([]);
  const [gender, setGender] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const editSymptoms = (index, bodyPart, subLocation, symptom) => {
    let newSymptomList = symptomList;

    if (bodyPart) {
      newSymptomList[index]["bodyPart"] = bodyPart;
    }

    if (subLocation) {
      newSymptomList[index]["subLocation"] = subLocation;
    }

    if (symptom) {
      newSymptomList[index]["symptom"] = symptom;
    }

    setSymptomList(newSymptomList);
  };

  const finalSymptomIDArray = (array) => {
    setSymptomID(array);
  };

  function addToSymptomList(bodyPartClicked) {
    symptomList.push({
      bodyPart: bodyPartClicked,
      subLocation: null,
      symptom: null,
    });
    setSymptomList([...symptomList]);
  }

  const hasNullValues = (symptomList) => {
    //edge case no item has been added yet
    if (symptomList.length === 0) {
      return true;
    }

    if (!gender) {
      return true;
    }
    //otherwise loop through array of object until null value is found. Otherwise return true
    for (let ele of symptomList) {
      for (let key in ele) {
        if (ele[key] === null) {
          return true;
        }
      }
    }
    return false;
  };

  const deleteFromSymptomsList = (index) => {
    symptomList.splice(index, 1);
    setSymptomList([...symptomList]);
  };

  console.log("Gender", gender);

  return (
    <form className="symptom-form">
      <SymptomList
        editSymptoms={editSymptoms}
        symptomList={symptomList}
        addToSymptomList={addToSymptomList}
        deleteFromSymptomsList={deleteFromSymptomsList}
        finalSymptomIDArray={finalSymptomIDArray}
      />

      <Link
        onClick={(e) => {
          if (hasNullValues(symptomList)) {
            e.preventDefault();
            setShow(true);
          }
        }}
        className="diagnosis-button"
        to={{
          pathname: "/diagnosis",
          state: {
            symptoms: symptomList,
            diagnosis: symptomID,
            gender: gender,
          },
        }}
      >
        Get Diagnosis
      </Link>

      <div className="gender-select">
        <DropdownButton
          title="Select Gender"
          variant="primary"
          className="gender-select"
          onSelect={(e) => setGender(e)}
        >
          <Dropdown.Item eventKey={"Male"}>Male</Dropdown.Item>
          <Dropdown.Item eventKey={"Female"}>Female</Dropdown.Item>
        </DropdownButton>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Missing Fields</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ensure a gender has been selected, and each symptom card has been
          filled out completley!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
}
