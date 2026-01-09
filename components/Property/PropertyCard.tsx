import { PropertyProps } from "@/interfaces"; // adjust path if needed

const PropertyCard = ({ property }: { property: PropertyProps }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={property.image}
        alt={property.name}
        className="h-48 w-full object-cover rounded"
      />

      <h2 className="text-lg font-semibold mt-2">{property.name}</h2>

      <p className="text-gray-500">
        {property.address.city}, {property.address.country}
      </p>

      <p className="font-bold">${property.price}</p>

      <p className="text-sm text-yellow-500">⭐ {property.rating}</p>
    </div>
  );
};

export default PropertyCard;
