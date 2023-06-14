
async function dateChecker(date) {
    const inputDate = new Date(date).getTime();    
    const dateObject = new Date();
    const today = dateObject.getTime();
    const daysInBetween = inputDate - dateObject;
    const days = Math.floor(daysInBetween / (1000 * 60 * 60 *24) + 1);    
      
    console.log(days);
    return days;
    
}

export { dateChecker };

/*const inputDate = new Date(date).getTime();
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    
    const dateObject = new Date();
    const today = dateObject.getTime();
    const dayLimit = (today + sevenDays);    
    console.log('DATE CHECKER - INPUT DATE -> ', inputDate, ' <- TODAY --> ', today, 'LIMITDAY', dayLimit,);
    let check = {}
    if(inputDate <= dayLimit){
        check = true
    }else if(inputDate > dayLimit){
        check = false
    }
    console.log(check);
    return check;*/