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
    <div className="rest-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="rest-logo"
        className="rest-card-image"
      />
      <h1 className="rest-name-h1">
        <Link to={"/restaurant/" + id}>{name}</Link>
      </h1>
      <h2 className="rest-cusine-h2">{cuisines.join(", ")}</h2>
      <p className="rest-info-p">{avgRating}</p>
      <p className="rest-info-p">{costForTwo}</p>
      <p className="rest-info-p">{restaurantData.sla.deliveryTime} Mins</p>
    </div>
  );
}

export default RestaurantCard;