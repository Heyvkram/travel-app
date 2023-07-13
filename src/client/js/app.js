import { submit } from './submit';
import { geonames_api } from './app.config';
import { weatherbit_api } from './app.config';
import { getPicture_api } from './app.config';
import { displayAlert } from './utils/displayAlert';
const root = document.querySelector('.app')
const buttons = document.querySelector('.app__buttons');
let isAlertDisplayed = false; 
let locationInput = null;
let dateInput = null;

// function to create an imput to type the location and append it to the buttons div
function createInputLocation() {
    locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.placeholder = 'location';
    locationInput.classList.add('app__buttons__location');    
    buttons.appendChild(locationInput);
};

//function to create an imput to set the date and append it to the buttons div
function createInputDate() {
    dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.placeholder = 'date';
    dateInput.classList.add('app__buttons__date');    
    buttons.appendChild(dateInput);
};
 
//create the submit button and append it to the buttons div
function createSubmitButton(){
    const submitButton = document.createElement('button');
    submitButton.innerText = 'Submit'
    buttons.appendChild(submitButton);
    let alert = document.createElement('div');
    alert.classList.add('app__alert');
    //add the event listener
    submitButton.addEventListener('click', (e)=> { 
        const params = {
            event: e, 
            location: locationInput.value, 
            geonamesApi: geonames_api, 
            date: dateInput.value, 
            weatherApi: weatherbit_api,
            picturesApi: getPicture_api
        };        
        if (checkFulfilledInputs(params.location, params.date)) {            
            submit(params);                                    
        } else {
            displayAlert('noData');
        }
    });
}

//function to check if the imputs are filled returning true o false
function checkFulfilledInputs(location, date) {
    if ( location == '' || date == '' ) { 
        return false;  
    };
    return true;    
}

//ignition function to call all the others
function ignition() {
    createInputLocation();
    createInputDate();
    createSubmitButton();
}

ignition();

export { ignition }; 