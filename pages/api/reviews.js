import { supabaseServer } from '../../utils/supabase';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { data: existingReviews, error: reviewsError } = await supabaseServer
        .from('reviews')
        .select('*')
        .order('last_updated', { ascending: false });

      if (reviewsError) {
        console.error('Database error:', reviewsError);
        return res.status(500).json({ error: 'Database error occurred' });
      }

      let needsUpdate = false;
      if (existingReviews && existingReviews.length > 0) {
        const latestReview = existingReviews[0];
        const now = new Date();
        const lastUpdate = new Date(latestReview.last_updated);
        const oneWeek = 7 * 24 * 60 * 60 * 1000;
        needsUpdate = (now - lastUpdate) > oneWeek;
      } else {
        needsUpdate = true; 
      }

      res.status(200).json({ 
        reviews: existingReviews || [], 
        needsUpdate 
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } 
  
  else if (req.method === 'POST') {
    try {
      const { reviews } = req.body;
      
      if (!reviews || !Array.isArray(reviews)) {
        return res.status(400).json({ error: 'Invalid reviews data' });
      }

      const { error: deleteError } = await supabaseServer
        .from('reviews')
        .delete()
        .neq('id', 0);

      if (deleteError) {
        console.error('Error deleting old reviews:', deleteError);
        return res.status(500).json({ error: 'Failed to delete old reviews' });
      }

      const { data: insertedReviews, error: insertError } = await supabaseServer
        .from('reviews')
        .insert(reviews)
        .select();

      if (insertError) {
        console.error('Error inserting reviews:', insertError);
        return res.status(500).json({ error: 'Failed to save reviews' });
      }

      res.status(200).json({ reviews: insertedReviews });

    } catch (error) {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } 
  
  else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
} 