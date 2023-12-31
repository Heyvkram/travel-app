const content = document.querySelector('.app__content');
const contentChildNodes = content.children;
const contentWeatherNodes = contentChildNodes[1].children;

//funtion to update the ui with the data
function updateUi(content) {
    contentChildNodes[0].src = content.image;
    contentWeatherNodes[1].innerText = `Max: ${content.max}°C`;
    contentWeatherNodes[2].innerText = `Min: ${content.min}°C`;
    contentWeatherNodes[3].innerText = `Weather: ${content.weatherStatus}`;            
}

export { updateUi };