import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export default function AppointmentRequest(props) {
    const data = useLocation();
    const axios = require('axios')
    const [values, setValue] = useState({
            to: '',
            name: ''
    });
    
    const set = (name) => {
        return ({target: {value}}) => {
            setValue((oldValue) => ({...oldValue, [name]: value}));
        }
    }

    // let appointmentForm = React.createRef();
    // const sendMessage = async () => {
    //     const response = await axios.post('localhost:3001/message')
    //     .then(x => {
    //         console.log(x);
    //     })
    //     if (response.status !== 200) {
    //         throw new Error('message failed');
    //     }
    // }

    const onHandleTo = (event) => {
        setValue({
            to: event.target.value
            //message: {to: event.target.value}
            //message: {...values, to:event.target.value}
        })
    }
    const onHandleName = (event) => {
        setValue({
            //message: {name: event.target.value}
            to: values.to,
            name: event.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("value: ", values)
        console.log("diagnosis: ", data.state.diagnosis)
        try {
            axios.post(
                "http://localhost:3001/message"
                // {
                //     body: data.state.diagnosis,
                //     info: values
                // }
            ).then(response => {
                console.log(response)
            } 
            )
        } catch (e) {
            console.log("error", e);
        }
    }
  return (
          <form  onSubmit={onSubmit}>
              <div>
                Number:
                <input type='text' name="to" value={values.to} onChange={onHandleTo}></input>
                Name:
                <input type='text' name="name" value={values.name} onChange={onHandleName}></input>
              </div>
              <button type="submit" >Submit</button>
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
