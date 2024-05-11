import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {  
  const param = useParams();
  const {id} = param;

  const [restaurantDetails, menuItems] = useRestaurantMenu(id);
  const [showItemIndex, setShowItemIndex] = useState(null);

  if (menuItems.length === 0) {
    return (
      <div className="flex flex-wrap rounded-lg bg-gray-200">
        <ShimmerUI />
      </div>
    );
  }

  return (
    <div className="m-10 p-10 bg-gray-200 rounded-xl text-center">
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
          {menuItems?.map((menuItem, index) => (
            <RestaurantCategory
              key={menuItem?.card?.card?.title}
              category={menuItem?.card?.card}
              showItem={index === showItemIndex ? true : false}
              setShowItemIndex={() => setShowItemIndex(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;