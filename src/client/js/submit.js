import { getCoordinates } from './caller/getCoordinates';
import { getWeather } from './caller/getWeather';
import { getPicture } from './caller/getPicture'
import { dateChecker } from './caller/dateChecker';
import { displayAlert } from './utils/displayAlert';
import { updateUi } from './utils/updateui';

//function to get all the data provided with the APIs and store it
async function submit (params) {    
    params.event.preventDefault();
    //empty variable to store the info
    let content = {};
    //getting the info
    let coordinates = await getCoordinates(params.location, params.geonamesApi);
    let isCurrentWeather = await dateChecker(params.date);
    let weather = await getWeather(coordinates, params.weatherApi, isCurrentWeather);
    let picture = await getPicture(params.location, params.picturesApi); 
    
    if( isCurrentWeather > 16) {        
        displayAlert('wrongDate');
    }else{
        //storeing the info to the empty variable
        content.max = weather.temperatureMax;
        content.min = weather.temperatureMin;
        content.weatherStatus = weather.weather;
        content.image = picture;
    updateUi(content);
    }
}

export { submit };
