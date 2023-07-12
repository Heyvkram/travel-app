import { getCoordinates } from './getCoordinates';
import { dateChecker } from './dateChecker';

async function getWeather(coordinates, weatherbit_api, check){
    const lat = coordinates.lat;
    const lon = coordinates.lon;
    let url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherbit_api}`
    
    const response = await fetch(url);
    try {
        if(check > 16){            
            console.log("data is not aviable yet, try again in a few days!")
        }else{        
        const weatherData = await response.json()
        const weatherInfo =  {
            temperatureMax: weatherData.data[check].app_max_temp,
            temperatureMin: weatherData.data[check].app_min_temp,
            weather: weatherData.data[check].weather.description,            
        }; 
        return weatherInfo;             
        }          
        } catch (error) {
        console.log("error", error);
        }
};

export { getWeather };
