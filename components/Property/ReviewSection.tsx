import axios from "axios";
import { useState, useEffect } from "react";

// Define the type for each review
interface Review {
  id: number;
  comment: string;
  [key: string]: any; // in case API returns extra fields
}

// Props type
interface ReviewSectionProps {
  propertyId: string; // the id from PropertyDetail page
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;
      try {
        const response = await axios.get<Review[]>(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="p-4 border rounded">
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
