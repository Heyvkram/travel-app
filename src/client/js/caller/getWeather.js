import { getCoordinates } from './getCoordinates';
import { dateChecker } from './dateChecker';

//function to get the weather using the coordinates and the weatherbit API
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
        //Taking the desired information and storing it in a variable
        const weatherInfo =  {
            temperatureMax: weatherData.data[check].app_max_temp,
            temperatureMin: weatherData.data[check].app_min_temp,
            weather: weatherData.data[check].weather.description,            
        }; 
        //returning the desired api information
        return weatherInfo;             
        }          
        } catch (error) {
        console.log("error", error);
        }
};

export { getWeather };
