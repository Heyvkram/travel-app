import { submit } from './submit';
import { geonames_api } from './app.config';
import { weatherbit_api } from './app.config';
const app = document.getElementsByTagName('body');
const header = document.querySelector('.app__header');
const main = document.querySelector('.app__main');
const buttons = document.querySelector('.app__buttons');

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
    submitButton.addEventListener('click', (e)=> { 
        const params = {
            event: e, 
            location: locationInput.value, 
            geonamesApi: geonames_api, 
            date: dateInput.value, 
            weatherApi: weatherbit_api
        };
        submit(params)
    });
}

function ignition() {
    createInputLocation();
    createInputDate();
    createSubmitButton();
    console.log('putita');
}

ignition();

export { ignition }; 