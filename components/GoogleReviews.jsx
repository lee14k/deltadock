import { useEffect, useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import { reviewsData } from "../public/reviews";
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    checkAndUpdateReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/google-reviews');
      const data = await response.json();
      
      const simplifiedReviews = data.reviews.map(review => ({
        name: review.authorAttribution.displayName,
        rating: review.rating,
        text: review.text.text,
        publish_time: review.publish_time,
        last_updated: new Date().toISOString()
      }));
      
      return simplifiedReviews;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      throw error;
    }
  };

  const checkAndUpdateReviews = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/reviews');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch reviews');
      }

      const { reviews: existingReviews, needsUpdate } = data;

      if (needsUpdate) {
        try {
          const newReviews = await fetchReviews();
          
          const updateResponse = await fetch('/api/reviews', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ reviews: newReviews }),
          });

          const updateData = await updateResponse.json();

          if (!updateResponse.ok) {
            console.error('Error updating reviews:', updateData.error);
            setError('Failed to save reviews');
            setReviews(newReviews);
          } else {
            setReviews(updateData.reviews);
          }
        } catch (fetchError) {
          console.error('Error fetching new reviews:', fetchError);
          setError('Failed to fetch reviews');
          if (reviewsData && reviewsData.length > 0) {
            setReviews(reviewsData);
          }
        }
      } else {
        setReviews(existingReviews);
      }
    } catch (error) {
      console.error('Unexpected error in checkAndUpdateReviews:', error);
      setError('An unexpected error occurred');
      if (reviewsData && reviewsData.length > 0) {
        setReviews(reviewsData);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 2, textAlign: 'center' }}>
        <Typography>Loading reviews...</Typography>
      </Box>
    );
  }

  if (error && reviews.length === 0) {
    return (
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 2, textAlign: 'center' }}>
        <Typography color="error">
          {error}. Please try again later.
        </Typography>
      </Box>
    );
  }

  if (reviews.length === 0) {
    return (
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 2, textAlign: 'center' }}>
        <Typography>
          No reviews available at the moment.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>
      <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
        {reviews.slice(0, 3).map((review, index) => (
          <Box
            key={index}
            className="homeheaderbg text-black rounded-lg shadow-md p-4 mb-4 "
          >
            <Typography
              variant="h6"
              component="p"
              className={`text-4xl mb-2 ${libre.className}`}
            >
              {review.name}
            </Typography>
            <Rating name="read-only" value={review.rating} readOnly />
            <Typography variant="body2" className="text-xl">
              {review.text || review.snippet}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GoogleReviews;
