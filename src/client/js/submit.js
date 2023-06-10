import { getCoordinates } from '/caller';

async function submit () {
    let content = {};
    let coordinates = await getCoordinates();
    console.log(coordinates);
}

export { submit };
