//get the date and check the days in between today and the date provided.
async function dateChecker(date) {
    const inputDate = new Date(date).getTime();    
    const dateObject = new Date();
    const today = dateObject.getTime();
    const daysInBetween = inputDate - dateObject;
    const days = Math.floor(daysInBetween / (1000 * 60 * 60 *24) + 1);    
    return days;
    
}

export { dateChecker };