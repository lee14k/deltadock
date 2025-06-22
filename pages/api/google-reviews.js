import 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const place_id = 'ChIJqX8Al7AsUQoRD8OTGVaCtKc';
      console.log(place_id);
      if (!place_id) {
        return res.status(400).json({ error: 'place_id is required' });
      }
      
      const apiKey = process.env.GOOGLE_PLACES_API_KEY;
      
      if (!apiKey) {
        return res.status(500).json({ error: 'Google Places API key not configured' });
      }
      const response = await fetch(`https://places.googleapis.com/v1/places/${place_id}?fields=reviews`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'reviews'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Google Places API error: ${response.status}`);
      }
      
      const data = await response.json();
      res.status(200).json(data);
      
    } catch (error) {
      console.error('Error fetching reviews:', error.message);
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}