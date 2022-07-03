export const putZeroBeforeNumber = (number) => {
    let tempNumber;
    if (parseInt(number) < 10) {
        tempNumber = "0" + number;
        return tempNumber
    } else {
        return number
    }
}