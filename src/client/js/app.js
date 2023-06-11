import { submit } from './submit';
import { geonames_api } from './app.config';
import { weatherbit_api } from './app.config';
const app = document.getElementsByTagName('BODY');
const root = document.querySelector('.app')
const header = document.querySelector('.app__header');
const main = document.querySelector('.app__main');
const buttons = document.querySelector('.app__buttons');
let isAlertDisplayed = false; 

let locationInput = null;
let dateInput = null;

function createInputLocation() {
    locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.placeholder = 'location';
    locationInput.classList.add('app__buttons__location');    
    buttons.appendChild(locationInput);
};

function createInputDate() {
    dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.placeholder = 'date';
    dateInput.classList.add('app__buttons__date');    
    buttons.appendChild(dateInput);
};

function createSubmitButton(){
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit'
    buttons.appendChild(submitButton);
    let alert = document.createElement('div');
    alert.classList.add('app__alert');
    submitButton.addEventListener('click', (e)=> { 
        const params = {
            event: e, 
            location: locationInput.value, 
            geonamesApi: geonames_api, 
            date: dateInput.value, 
            weatherApi: weatherbit_api
        };
        console.log(params, 'PRE LOGIC CHECK');
        if (checkFulfilledInputs(params.location, params.date)) {            
            submit(params);
        } else {
            createAlertMessage();
        }
    });
}

function checkFulfilledInputs(location, date) {
    // console.log("params check file imput", params);
    console.log('locate imput', location, 'date imput', date);
    if ( location == '' || date == '' ) { 
        return false;  
    };
    return true;
    //Comprueba los casos de error y retorna false si no sale algo bien || retorna true si todo correcto
}

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
        // Crea el alert y lo apende y lo remueve al segundo y medio
}

/*function createAlert(){    
    let alert = document.createElement('div');
    alert.classList.add('app__alert');
    console.log('location ', locationInput.value, ' date ', dateInput.value );
    if ( locationInput.value == '' && dateInput.value == '' ) {        
        alert.innertext = 'Please provide your trip data'
        root.appendChild(alert);   
        console.log(app);     
    } else if ( locationInput.value == '' ) {        
        alert.innertext = 'Please provide a valid location'
        root.appendChild(alert);
    } else if ( dateInput.value == '' ) {        
        alert.innertext = 'Please provide a valid location'
        root.appendChild(alert);        
    };
    setTimeout(()=>{alert.remove(), 5000});
};*/

function ignition() {
    createInputLocation();
    createInputDate();
    createSubmitButton();
}

ignition();

export { ignition }; 