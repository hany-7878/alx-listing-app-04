import axios from "axios";
import { useState, useEffect } from "react";

// Define a type for individual reviews
interface Review {
  id: number;
  comment: string;
  rating?: number; // optional if your API provides rating
  author?: string; // optional if your API provides author
}

// Props for the component
interface ReviewSectionProps {
  propertyId: number;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<Review[]>(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) {
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p>No reviews yet for this property.</p>;
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="border p-4 rounded-md shadow-sm bg-white"
        >
          {review.author && <p className="font-semibold">{review.author}</p>}
          <p>{review.comment}</p>
          {review.rating !== undefined && (
            <p className="text-yellow-500">Rating: {review.rating}/5</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
