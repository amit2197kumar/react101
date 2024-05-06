import { useEffect, useState } from 'react';
import { SWIGGY_RESTAURANT_DETAILS_API } from "../utils/constants";

const useRestaurantMenu = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
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
  };

  return [restaurantDetails, menuItems];
};

export default useRestaurantMenu;