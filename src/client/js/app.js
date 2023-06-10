import { submit } from './submit';
const app = document.getElementsByTagName('body');
const header = document.querySelector('.app__header');
const main= document.querySelector('.app__main');
const buttons = document.querySelector('.app__buttons');

function createInputLocation() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'location';
    input.classList.add('app__buttons__location');    
    buttons.appendChild(input);
};

function createInputDate() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'date';
    input.classList.add('app__buttons__date');
    const appButtons = document.getElementById('app__buttons')
    buttons.appendChild(input);
};

function createSubmitButton(){
    const button = document.createElement('button');
    button.innerText = 'Submit'
    const appButtons = document.getElementById('app__buttons')
    buttons.appendChild(button);
}

function ignition() {
    createInputLocation();
    createInputDate();
    createSubmitButton();
    console.log('putita');
}

ignition();

export { ignition }; 