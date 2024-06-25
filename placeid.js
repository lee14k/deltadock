const axios = require('axios');

const apiKey = 'AIzaSyC2U-TgggD3MYk_V8EVG1akwxwU6AQMfRQ';
const query = 'Delta Door & Dock in Michigan';

const url = 'https://places.googleapis.com/v1/places:searchText';

const headers = {
  'Content-Type': 'application/json',
  'X-Goog-Api-Key': apiKey,
  'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress',
};

const data = {
  textQuery: query,
};

axios.post(url, data, { headers })
  .then(response => {
    const places = response.data.places;
    if (places && places.length > 0) {
      places.forEach(place => {
        console.log(`Place ID: ${place.id}`);
        console.log(`Name: ${place.displayName}`);
        console.log(`Address: ${place.formattedAddress}`);
      });
    } else {
      console.log('No places found.');
    }
  })
  .catch(error => {
    console.error('Error fetching place data:', error);
  });
