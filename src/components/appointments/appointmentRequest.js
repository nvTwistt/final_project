
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const axios = require('axios')

export default function AppointmentRequest(props) {
    const data = useLocation();
    const [values, setValue] = useState({
        to: '',
        name: ''
    });

    const set = (name) => {
        return ({ target: { value } }) => {
            setValue((oldValue) => ({ ...oldValue, [name]: value }));
        }
    }
    const storeState = require('./data');
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
        let specialists = data.state.diagnosis[2];
        let diagnosisInformation= {
            'symptom': data.state.diagnosis[0],
            'accuracy': data.state.diagnosis[1],
        }
        const stringFormatter = (value) => {
            return value.toLowerCase()
        }
        if (specialists.length == 2) {
            diagnosisInformation['specialization_1'] = stringFormatter(specialists[0]);
            diagnosisInformation['specialization_2'] = stringFormatter(specialists[1]);
        } else if (specialists.length == 1){
            diagnosisInformation['specialization_1'] = stringFormatter(specialists[0]);
        }
        let result = 
            {
                'name': values.name,
                'to': values.to
            }
        const blob = new Blob([result], {
            type: 'application/json'
        })
        let body =  "test this";
        let bodyFormData = new FormData();
        bodyFormData.append("document", blob);
        let payload = { info: result, diagnosis: diagnosisInformation}
        // application/x-www-form-urlencoded
        axios.post('http://localhost:3001/message', JSON.stringify(payload), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(result => {
            console.log('result===<<', result)
        }).catch(err => {
            console.log('err:: ', err)
        })

        try {
            // { 'content-type': 'application/x-www-form-urlencoded'
          
            // axios({
            //     method: 'post',
            //     url: "http://localhost:3001/message",
            //     data: { name: 'ndnbvedbfv', food: 'jbnwbnej', id: 3},
            //     headers: {
            //         'Content-Type': "text/json"
            //     }
            //     })
                // .then(response => {
                //     console.log(response)
                // });
        } catch (e) {
            console.log("error", e);
        }
    }

    return (
        <form onSubmit={onSubmit}>
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
