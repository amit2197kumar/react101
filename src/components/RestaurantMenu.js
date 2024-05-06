import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {  
  const param = useParams();
  const {id} = param;

  const [restaurantDetails, menuItems] = useRestaurantMenu(id);

  if (menuItems.length === 0) {
    return (
      <div className="flex flex-wrap rounded-lg bg-gray-200">
        <ShimmerUI />
      </div>
    );
  }

  return (
    <div className="m-10 p-10 bg-yellow-100 rounded-xl">
      <div className="font-bold text-xl">
        <h1>{restaurantDetails.name}</h1>
        <h2>Location: {restaurantDetails.locality}</h2>
        <p>
          Raiting: {restaurantDetails.avgRating}⭐️ /
          {restaurantDetails.totalRatingsString}
        </p>
        <p>Cuisines: {restaurantDetails.cuisines.join(", ")}</p>
        <p>{restaurantDetails.costForTwoMessage}</p>
      </div>

      <div className="mt-10">
        <h2 className="font-bold">Restaurant Menu:</h2>
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