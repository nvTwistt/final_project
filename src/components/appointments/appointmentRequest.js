import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function AppointmentRequest(props) {
    const data = useLocation();
    const axios = require('axios')
    const [values, setValue] = useState({
        name: ""
    });
    console.log(data.state)
    const set = (name) => {
        return ({target: {value}}) => {
            setValue((oldValue) => ({...oldValue, [name]: value}));
        }
    }
    // const sendMessage = async () => {
    //     const response = await axios.post('localhost:3001/message')
    //     .then(x => {
    //         console.log(x);
    //     })
    //     if (response.status !== 200) {
    //         throw new Error('message failed');
    //     }
    // }
    const onSubmit = () => {
        try {
            let response = axios.post(
                "http://localhost:3001/message"
            )
            console.log(response);
        } catch (e) {
            console.log("error", e);
        }
    }
  return (
          
          <button type="submit" onClick={onSubmit}>Submit</button>
//     <div>
//       <div>
//       {/* <p>Make your appointment for {props.diagnosis[0]}</p> */}
//     </div>  
//    <label>
//     Name:
//     <input type="text" name="name" />
//     </label>
//     <label>
//     Number:
//     <input type="text" name="number" />
//     </label>
//     <button >Submit</button>
//     </div>
  );
}
