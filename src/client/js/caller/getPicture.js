async function getPicture (location, getPicture_api) {
    let url = `https://pixabay.com/api/?key=${getPicture_api}&q=${location}&image_type=photo`
    const response = await fetch(url);
    try {
        const pictureData = await response.json()
        const picture = pictureData.hits[0].webformatURL
        return picture;      
    } catch (error) {
        console.log("error", error);
    }    
}

export { getPicture };