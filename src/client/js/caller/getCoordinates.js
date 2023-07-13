//function to get the coordinates of the city with geonames API
async function getCoordinates (location, geonames_api) {    
    let url = `http://api.geonames.org/searchJSON?q=${location}&maxRows=10&username=${geonames_api}`   
    const response = await fetch(url);
    try {
        const cityData = await response.json()
        //Taking the desired information and storing it in a variable
        const coordinates = {
            lat: cityData.geonames[0].lat,
            lon: cityData.geonames[0].lng
        }; 
        //returning the desired api information       
        return coordinates;       
    } catch (error) {
        console.log("error", error);
    }    
}

export { getCoordinates };