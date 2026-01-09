import ReviewSection from "./ReviewSection";

interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    images: string[];
    location: string;
    [key: string]: any;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-lg mb-4">${property.price}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {property.images?.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={property.title}
            className="w-full h-60 object-cover rounded"
          />
        ))}
      </div>

      <p className="mb-6">{property.description}</p>

      {/* Review Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        <ReviewSection propertyId={property.id} />
      </div>
    </div>
  );
}
