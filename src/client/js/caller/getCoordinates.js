async function getCoordinates (name) {
    let url = 'http://api.geonames.org/placeName?placename=${name}&maxRows=10&username=${process.env.GEONAMES_KEY}'
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    try {
      const newData = await response.json();            
       return newData;
     }catch(error) {
     console.log("error", error);
     }
}


export { getCoordinates };