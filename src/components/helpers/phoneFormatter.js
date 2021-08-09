/**
 * Function takes in a phone number and will clean it and return it in the propper format
 * @param {incoming phone number} number 
 * @returns formatted phone number
 * 
 * const phone = '+5874378931' //case 2
 * const phone1 = '5874378931' //case 4
 * const phone2 = '+15874378931' //case 1
 * const phone3 = '15874378931' // case 3
 * ex (number = phone)
 * returns: +15874378931
 */
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