const content = document.querySelector('.app__content');
const contentChildNodes = content.children;

function updateUi(content) {
    console.log(contentChildNodes);
    contentChildNodes[0].innerText = content.max;
    contentChildNodes[1].innerText = content.min;
    contentChildNodes[2].innerText = content.weatherStatus;
    contentChildNodes[3].src = content.image;        
}

/*function createAlertMessage() {
    if(!alertCheck){
    alertCheck = true
    let alert = document.createElement('div');
    alert.classList.add('app__content--alert');
    alert.innerText = 'Sorry! we can only provide the info for the next 16 days, try again later! : ('
    content.appendChild(alert);
    setTimeout(()=>{
        content.removeChild(alert)
        alertCheck = false
    }, 1500);    
    }
}*/

export { updateUi };