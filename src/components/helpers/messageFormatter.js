const patientMessage = (payload) => {
    let information = payload['info'];
    let diagnosis = payload['diagnosis'];
    let introduction = `Hello ${information.name}.`
    let bodyMessaage = ` Your results show that there is a ${diagnosis.accuracy}% chance that you have a ${diagnosis.symptom}.`
    let reccomendation = ` Based off the diagnosis, we are reccomending you to see a doctor who specializes in ${diagnosis.specialization_1} or ${diagnosis.specialization_2}.`
    let completeMessage = introduction + bodyMessaage + reccomendation;
    let doctorsMessage = `You have received an appointment request from ${information.name}. They are experiencing a ${diagnosis.symptom}.`
    return [completeMessage, doctorsMessage, information.to];
}
module.exports = { patientMessage }