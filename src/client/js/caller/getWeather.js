import { getCoordinates } from './getCoordinates';
import { dateChecker } from './dateChecker';

async function getWeather(coordinates, weatherbit_api, check){
    const lat = coordinates.lat;
    const lon = coordinates.lon;
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherbit_api}`

    console.log(lat, lon, check);
    
    if(check == true){    
    const response = await fetch(url);
    try {
        const weatherData = await response.json()
        console.log(weatherData); 
        const weatherInfo =  {
            temperatureMax: weatherData.data[0].app_max_temp,
            temperatureMin: weatherData.data[0].app_min_temp,
            weather: weatherData.data[0].weather.description,            
        };
        console.log(weatherData); 
        return weatherInfo;             
                
        } catch (error) {
        console.log("error", error);
        }
    }else if(check == false){       
    const response = await fetch(url);
    try {
        const weatherData = await response.json()
        console.log(weatherData); 
        const weatherInfo = {
            temperatureMax: weatherData.data[9].app_max_temp,
            temperatureMin: weatherData.data[9].app_min_temp,
            weather: weatherData.data[9].weather.description,            
        };
        console.log(weatherData); 
        return weatherInfo;              
    
        } catch (error) {
        console.log("error", error);
        }        
    };
    //const response = await fetch (url);
   // try{

    //}
}

export { getWeather };
