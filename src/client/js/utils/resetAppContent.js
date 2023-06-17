const content = document.querySelector('.app__content');
const contentChildNodes = content.children;

function defaultUi() {    
    contentChildNodes[0].innerText = '';
    contentChildNodes[1].innerText = '';
    contentChildNodes[2].innerText = '';
    contentChildNodes[3].src = '';        
}

export { defaultUi };