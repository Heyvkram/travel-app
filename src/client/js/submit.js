import { getCoordinates } from './caller/getCoordinates';
import { getWeather } from './caller/getWeather';
import { getPicture } from './caller/getPicture'
import { dateChecker } from './caller/dateChecker';
import { displayAlert } from './utils/displayAlert';
import { updateUi } from './utils/updateui';
async function submit (params) {    
    params.event.preventDefault();
    console.log('hellooos')
    let content = {};
    let coordinates = await getCoordinates(params.location, params.geonamesApi);
    let isCurrentWeather = await dateChecker(params.date);
    let weather = await getWeather(coordinates, params.weatherApi, isCurrentWeather);
    let picture = await getPicture(params.location, params.picturesApi);  
    console.log(coordinates, weather, picture, isCurrentWeather);
    
    if( isCurrentWeather > 16) {
        
        displayAlert('wrongDate');
    }else{
        content.max = weather.temperatureMax;
        content.min = weather.temperatureMin;
        content.weatherStatus = weather.weather;
        content.image = picture;
    console.log(content);
    updateUi(content);
    }
}

/*maxTemperature.innerHTML = `Max temperature: ${weather.temperatureMax}`;
minTemperature.innerHTML = `Min temperature: ${weather.temperatureMin}`;*/

export { submit };
