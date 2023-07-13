const header = document.querySelector('.app__header');
const title = document.querySelector('.app__header--title');

//function to create an alert in case the data provided or the date are wrong
function displayAlert(type) {  
    //storing the cases and the alert texts      
    let messages = {
        noData: 'Please provide your trip data',
        wrongDate: 'Sorry! we can only provide the info for the next 16 days, try again later!'
    }
    //creating the DOM element and appending to the header
    let alert = document.createElement('div');
    alert.classList.add('app__content--alert');
    alert.innerText = messages[type];
    title.innerText = '';
    header.appendChild(alert);
    //setting a timeout function to make the alert desapear afer 1.5 secconds
    setTimeout(()=>{
        header.removeChild(alert);
        title.innerText = 'TRAVEL APP!';        
    }, 1500);        
}  

export { displayAlert };