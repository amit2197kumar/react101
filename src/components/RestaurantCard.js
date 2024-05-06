import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurantData }) => {
  const {
    id,
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
  } = restaurantData;

  return (
    <div className="w-40 p-3 m-2 bg-gray-200 rounded-lg hover:bg-gray-300">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="rest-logo"
        className="w-40 h-40 object-cover rounded-lg"
      />
      <h1 className="font-bold">
        <Link to={"/restaurant/" + id}>{name}</Link>
      </h1>
      <h2 className="font-light">{cuisines.join(", ")}</h2>
      <p className="font-bold">{avgRating} ⭐️</p>
      <p className="font-light">{costForTwo}</p>
      <p className="font-light">{restaurantData.sla.deliveryTime} Mins</p>
    </div>
  );
}

export default RestaurantCard;