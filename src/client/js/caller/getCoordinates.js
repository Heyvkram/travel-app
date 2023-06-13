async function getCoordinates (location, geonames_api) {

    console.log('@PARAMS getCoordinates: ', location, geonames_api);
    let url = `http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${geonames_api}`
    //`http://api.geonames.org/citiesJSON?placename=${name}&lang=en&username=${geonames_api}`
    console.log(url, 'GEONAMES -> url');
    const response = await fetch(url);
    try {
        const cityData = await response.json()
        const coordinates = {
            lat: cityData.geonames[0].lat,
            lon: cityData.geonames[0].lng
        };
        console.log(cityData);
        return coordinates;        
        
    } catch (error) {
        console.log("error", error);
    }
    
}


export { getCoordinates };