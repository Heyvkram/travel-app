//function to get the picture of the city using pixabay API
async function getPicture (location, getPicture_api) {
    let url = `https://pixabay.com/api/?key=${getPicture_api}&q=${location}&image_type=photo`
    const response = await fetch(url);
    try {
        const pictureData = await response.json()
        //Taking the desired information and storing it in a variable
        const picture = pictureData.hits[0].webformatURL
        //returning the desired api information
        return picture;      
    } catch (error) {
        console.log("error", error);
    }    
}

export { getPicture };