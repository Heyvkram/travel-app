import { submit } from './js/submit';

class App {
  constructor() {
      this.app = getElementsByTagName('BODY');
      console.log(this.app);
  }

  setupDOMReferences() {
      this.header = document.querySelector('.app__header');
      this.main= document.querySelector('.app__main');
      this.buttons = document.querySelector('.app__buttons');
      console.log('checker', this);
  }

  createDOMElements() {
    this.location = document.createElement('input');
    this.location.type = 'text';
    this.location.classList.add('app__buttons__location');
    this.buttons.appendChild(this.location);

    this.dateSelector = document.createElement('input');
    this.dateSelector.type = 'date';
    this.dateSelector.classList.add('app__buttons__date');
    this.buttons.appendChild(this.dateSelector);

    this.submit = document.createElement('button');
    this.submit.innerText = 'Submit';
    this.buttons.appendChild(this.submit);
  }

  addEventListeners() {
    this.submit.addEventListener('click', doSomething());
  }

  init() {
      setupDOMReferences();
      createDOMElements();
      addEventListeners();
      console.log('putita');
  }
};
