const phone = '+5874378939' //case 2
const phone1 = '5874378939' //case 4
const phone2 = '+15874378939' //case 1
const phone3 = '15874378939' // case 3
const format = (number) => {
    let cleanNumber = number.replace(/\s/g, "");
    if (cleanNumber.startsWith('+1')){
        return cleanNumber;
    } else if (cleanNumber.startsWith('+')) {
        let splitNumbers = cleanNumber.split('')
        splitNumbers.splice(1,0,"1")
        let formattedNumber = splitNumbers.join('')
        return formattedNumber;
    } else if (cleanNumber.startsWith('1')) {
        return '+'+cleanNumber;
    } else {
        return '+1'+cleanNumber;
    }
}

module.exports = {format}