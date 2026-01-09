import { useEffect, useState } from "react";
import axios from "axios";

interface Review {
  id: string;
  comment: string;
  user?: string;
  rating?: number;
}

interface Props {
  propertyId: number; // matches PropertyProps.id
}

export default function ReviewSection({ propertyId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get<Review[]>(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id}>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}
