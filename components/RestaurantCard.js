import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
    cloudinaryImageId,
  } = restaurantData.data;

  return (
    <div className="rest-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="rest-logo"
        className="rest-card-image"
      />
      <h1 className="rest-name-h1">{name}</h1>
      <h2 className="rest-cusine-h2">{cuisines.join(", ")}</h2>
      <p className="rest-info-p">{avgRating}</p>
      <p className="rest-info-p">{costForTwoString}</p>
      <p className="rest-info-p">{deliveryTime} Mins</p>
    </div>
  );
}

export default RestaurantCard;