const header = document.querySelector('.app__header');
const title = document.querySelector('.app__header--title');

function displayAlert(type) {        
    let messages = {
        noData: 'Please provide your trip data',
        wrongDate: 'Sorry! we can only provide the info for the next 16 days, try again later!'
    }
    let alert = document.createElement('div');
    alert.classList.add('app__content--alert');
    alert.innerText = messages[type];
    title.innerText = '';
    header.appendChild(alert);
    setTimeout(()=>{
        header.removeChild(alert);
        title.innerText = 'TRAVEL APP!';        
    }, 1500);
        
}  
    
    
    
    
    
    
    
    
  /* main.removeChild(content);
    alert.innerText = 'Sorry! we can only provide the info for the next 16 days, try again later! : ('
    root.appendChild(alert);
    setTimeout(()=>{
        root.removeChild(alert);
        defaultUi();
        main.appendChild(content);
    }, 3000);    
};

function createAlertMessage() {
    if(!isAlertDisplayed){
    isAlertDisplayed = true
    let alert = document.createElement('div');
    alert.classList.add('app__alert');
    alert.innerText = 'Please provide your trip data'
    root.appendChild(alert);
    setTimeout(()=>{
        root.removeChild(alert)
        isAlertDisplayed = false
    }, 1500);    
    }
}*/

export { displayAlert };