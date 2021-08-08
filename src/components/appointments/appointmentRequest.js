import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function AppointmentRequest(props) {
    const data = useLocation();
    const axios = require('axios')
    const [values, setValue] = useState({
        message: {
            to: '',
            body: ''
        }
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

    const onHandleChange = (event) => {
        const name = event.target.getAttribute('name');
        setValue({
            message: {...values.message,[name]: event.target.values}
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("value: ", values)
        // try {
        //     let response = axios.post(
        //         "http://localhost:3001/message"
        //     )
        //     console.log(response);
        // } catch (e) {
        //     console.log("error", e);
        // }
    }
  return (
          <form>
              <div>
                Number:
                <input type='text' name="to" value={values.message.to} onChange={onHandleChange}></input>
                Name:
                <input type='text' name="name" value={values.message.name} onChange={onHandleChange}></input>
              </div>
              <button type="submit" onClick={onSubmit}>Submit</button>
          </form>
          
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
