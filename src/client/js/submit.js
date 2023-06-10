import { getCoordinates } from './caller/getCoordinates';

async function submit () {
    let content = {};
    let coordinates = await getCoordinates();
    console.log(coordinates);
}

export { submit };
