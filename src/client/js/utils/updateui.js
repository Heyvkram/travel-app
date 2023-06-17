const content = document.querySelector('.app__content');
const contentChildNodes = content.children;
const contentWeatherNodes = contentChildNodes[1].children;

function updateUi(content) {
    console.log(contentChildNodes);
    contentChildNodes[0].src = content.image;
    contentWeatherNodes[1].innerText = `Max: ${content.max}°C`;
    contentWeatherNodes[2].innerText = `Min: ${content.min}°C`;
    contentWeatherNodes[3].innerText = `Weather: ${content.weatherStatus}`;
            
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