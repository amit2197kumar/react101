import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
import {SWIGGY_RESTAURANT_DETAILS_API} from "../utils/constants";

const RestaurantMenu = () => {  
  const param = useParams();
  const {id} = param;

  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantMenu();  
  }, []);

  const getRestaurantMenu = async () => {
    const response = await fetch(SWIGGY_RESTAURANT_DETAILS_API + id);
    const data = await response.json();

    const restaurantData = data?.data?.cards[2].card.card.info;
    setRestaurantDetails(restaurantData);
    const menuData =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    setMenuItems(menuData);

    console.log(restaurantData);
    console.log(menuData);
  }

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