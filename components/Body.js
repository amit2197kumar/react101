import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(mockData);

  return (
    <div className="body">
      <button
        className="top-rated-btn flt-btn"
        onClick={() => {
          const filteredRestaurants = listOfRestaurants.filter(
            (restaurant) => restaurant.data.avgRating > 4
          );
          setListOfRestaurants(filteredRestaurants);
        }}
      >
        Top Rated
      </button>

      <button
        className="veg-res-btn flt-btn"
        onClick={() => {
          const filteredVegRestaurants = listOfRestaurants.filter(
            (restaurant) => restaurant.data.veg === true
          );
          setListOfRestaurants(filteredVegRestaurants);
        }}
      >
        Veg
      </button>

      <button
        className="non-veg-res-btn flt-btn"
        onClick={() => {
          const filteredVegRestaurants = listOfRestaurants.filter(
            (restaurant) => restaurant.data.veg !== true
          );
          setListOfRestaurants(filteredVegRestaurants);
        }}
      >
        Non-Veg
      </button>

      <button
        className="reset-filter-btn flt-btn"
        onClick={() => {
          setListOfRestaurants(mockData);
        }}
      >
        Reset all filter
      </button>

      <div className="rest-list">
        {listOfRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.data.id}
              restaurantData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
