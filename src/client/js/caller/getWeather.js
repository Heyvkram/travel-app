import { getCoordinates } from './getCoordinates';
import { dateChecker } from './dateChecker';

async function getWeather(coordinates, weatherbit_api, check){
    const lat = coordinates.lat;
    const lon = coordinates.lon;
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherbit_api}`

    console.log(lat, lon, check);
    
    const response = await fetch(url);
    try {
        if(check > 16){            
            console.log("data is not aviable yet, try again in a few days!")
        }else{        
        const weatherData = await response.json()
        console.log(weatherData); 
        const weatherInfo =  {
            temperatureMax: weatherData.data[check].app_max_temp,
            temperatureMin: weatherData.data[check].app_min_temp,
            weather: weatherData.data[check].weather.description,            
        };
        //updateUi();
        console.log(weatherData); 
        return weatherInfo;             
        }          
        } catch (error) {
        console.log("error", error);
        }
        //updateUi();
};

/*function updateUi(){
    const main = document.querySelector('.app__main');
    const weatherResult = document.createElement('div');
    weatherResult.classList.add('app__main__weatherResult');
    main.appendChild(weatherResult);
    const maxTempInfo = document.createElement('span');
    maxTempInfo.classList.add('app__main__weatherInfo__max');
    maxTempInfo.innerText = weatherData.data[check].app_max_temp;
    const minTempInfo = document.createElement('span');
    minTempInfo.classList.add('app__main__weatherInfo__min');
    minTempInfo.innerText = weatherData.data[check].app_min_temp;
    const weatherStatus = document.createElement('span');
    weatherStatus.classList.add('app__main__weatheInfo__weatherStatus');
    weatherStatus.innerText = weatherData.data[check].weather.description;
    main.appendChild(weatherResult, maxTempInfo,  minTempInfo, weatherStatus);
}
    //const response = await fetch (url);
   // try{
*/


export { getWeather };
