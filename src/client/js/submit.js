import { getCoordinates } from './caller/getCoordinates';
import { getWeather } from './caller/getWeather';
import { getPicture } from './caller/getPicture'
import { dateChecker } from './caller/dateChecker';
async function submit (params) {    
    params.event.preventDefault();
    console.log('hellooos')
    let content = {};
    let coordinates = await getCoordinates(params.location, params.geonamesApi);

    let isCurrentWeather = await dateChecker(params.date);

    let weather = await getWeather(coordinates, params.weatherApi, isCurrentWeather);
    let picture = await getPicture(params.location, params.picturesApi);
    console.log(coordinates, weather, picture);
}


export { submit };
