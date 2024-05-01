import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {  
  const param = useParams();
  const {id} = param;

  const [restaurantDetails, menuItems] = useRestaurantMenu(id);

  if (menuItems.length === 0) {
    return (<div className="rest-list">
      <ShimmerUI />
    </div>);
  }

  return (
    <div>
      <div className="rest-header">
        <h1>{restaurantDetails.name}</h1>
        <h2>Location: {restaurantDetails.locality}</h2>
        <p>
          Raiting: {restaurantDetails.avgRating}⭐️ /
          {restaurantDetails.totalRatingsString}
        </p>
        <p>Cuisines: {restaurantDetails.cuisines.join(", ")}</p>
        <p>{restaurantDetails.costForTwoMessage}</p>
      </div>

      <div className="rest-menu">
        <h2>Restaurant Menu</h2>
        <ul>
          {menuItems?.map((menuItem, index) => {
            return <li key={index}>{menuItem?.card?.info?.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;