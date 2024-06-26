import { useEffect, useState } from "react";
import { Box, Typography, Rating } from "@mui/material";
import { reviewsData } from "../public/reviews";

// Import the Libre Caslon Display font
import { Libre_Caslon_Display } from "next/font/google";
const libre = Libre_Caslon_Display({ subsets: ["latin"], weight: "400" });

const GoogleReviews = () => {
  const reviews = [
    {
      "user": "Alan Miller",
      "rating": 5,
      "snippet": "Trina was extremely helpful in my selection process due to the odd size of my garage door. She spent a very long time with me going over all of my options and ultimately I was able to find the perfect door. The installation work was done … More"
    },
    {
      "user": "Phillip Lamarch",
      "rating": 5,
      "snippet": "Tons of doors and options to pick from Katrina was very helpful and knowledgeable on helping me pick out my new garage door. Cory took the old one down and installed the new very quickly and it looks awesome! I would definitely recommend."
    },
    {
      "user": "Patricia VanEnkevort",
      "rating": 5,
      "snippet": "Highly recommend! Quick to respond and great service. Installed new garage door within a short timeframe, can’t say enough good things. You can’t go wrong with Cory and Katrina!!"
    }
  ];

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", padding: 2 }}>

      <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
        {reviews.map((review, index) => (
          <Box
            key={index}
            className="homeheaderbg text-black rounded-lg shadow-md p-4 mb-4 "
          >
            <Typography
              variant="h6"
              component="p"
              className={`text-4xl mb-2 ${libre.className}`}
            >
              {review.user}
            </Typography>
            <Rating name="read-only" value={review.rating} readOnly />
            <Typography variant="body2" className="text-xl">
              {review.snippet}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GoogleReviews;
