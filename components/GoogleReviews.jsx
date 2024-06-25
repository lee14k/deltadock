// components/GoogleReviews.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const GoogleReviews = () => {
  const [data, setData] = useState({ placeInfo: {}, reviews: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/google-reviews');
        setData(response.data);
      } catch (err) {
        setError('Error fetching reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>{data.placeInfo.title}</h2>
      <p>{data.placeInfo.address}</p>
      <p>Rating: {data.placeInfo.rating}</p>
      <p>Reviews: {data.placeInfo.reviews}</p>
      <ul>
        {data.reviews.map((review, index) => (
          <li key={index}>
            <p><strong>{review.user.name}</strong></p>
            <p>{review.snippet}</p>
            <p>Rating: {review.rating}</p>
            <p>Date: {review.date}</p>
            <p>Likes: {review.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
