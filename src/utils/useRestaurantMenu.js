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

    const categories =
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => {
          if (
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) {
            return c.card?.card?.["@type"];
          } else if (
            c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
          ) {
            return c?.card?.card?.categories[0]?.itemCards;
          }
        }
      );

    setMenuItems(categories);
  };

  return [restaurantDetails, menuItems];
};

export default useRestaurantMenu;