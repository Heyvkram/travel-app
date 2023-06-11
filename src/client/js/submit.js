import { getCoordinates } from './caller/getCoordinates';
import { getWeather } from './caller/getWeather';
async function submit (params) {    
    params.event.preventDefault();
    console.log('hellooos')
    let content = {};
    let coordinates = await getCoordinates(params.location, params.geonamesApi);
    let weather = await getWeather(coordinates, params.weatherApi)
    console.log(coordinates, weather);
}


export { submit };
