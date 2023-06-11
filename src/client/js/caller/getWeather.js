import { getCoordinates } from './getCoordinates';

async function getWeather(coordinates, weatherbit_api){
    const lat = coordinates.lat;
    const lon = coordinates.lon;

    console.log(lat, lon);
    
    let url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${weatherbit_api}`
    const response = await fetch(url);
    try {
        const weatherData = await response.json()
        console.log(weatherData); 
        const weatherInfo =  {
            temperature: weatherData.data[0].app_temp,
            weather: weatherData.data[0].weather.description
        };
        console.log(weatherInfo); 
        return weatherInfo;
               
        
        
    } catch (error) {
        console.log("error", error);
    }
    //const response = await fetch (url);
   // try{

    //}
}

export { getWeather };
