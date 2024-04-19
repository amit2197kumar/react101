import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_PUBLIC_GET_RES_API } from "../utils/constants";
import ShimmerUI from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [listOfAllRestaurants, setListOfAllRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchRestorantData();
  }, []);

  async function fetchRestorantData() {
    const data = await fetch(SWIGGY_PUBLIC_GET_RES_API);
    const jsonData = await data.json();

    setListOfAllRestaurants(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfFilteredRestaurants(
      jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  // Filter the restaurant data according input type
  function searchRestaurant(searchText, restaurantData) {
    const filterData = restaurantData.filter((restaurant) => {
      return (
        restaurant?.info?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase()) ||
        restaurant?.info?.cuisines
          .join(", ")
          .toLowerCase()
          .includes(searchText.toLowerCase())
      );
    });

    return filterData;
  }

  return (
    <div className="body">
      <div className="search-div">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurants = searchRestaurant(
              searchText,
              listOfAllRestaurants
            );
            if (filteredRestaurants.length === 0) {
              setSearchResult("No Match Found !!!");
            } else {
              setSearchResult("");
            }
            setListOfFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <div className="search-result">{searchResult}</div>
      </div>

      <button
        className="top-rated-btn flt-btn"
        onClick={() => {
          const filteredRestaurants = listOfAllRestaurants.filter(
            (restaurant) => restaurant.info.avgRating > 4.3
          );
          setListOfFilteredRestaurants(filteredRestaurants);
        }}
      >
        Top Rated
      </button>

      <button
        className="veg-res-btn flt-btn"
        onClick={() => {
          const filteredVegRestaurants = listOfAllRestaurants.filter(
            (restaurant) => restaurant.info.veg === true
          );
          setListOfFilteredRestaurants(filteredVegRestaurants);
        }}
      >
        Veg
      </button>

      <button
        className="non-veg-res-btn flt-btn"
        onClick={() => {
          const filteredNonVegRestaurants = listOfAllRestaurants.filter(
            (restaurant) => restaurant.info.veg !== true
          );
          setListOfFilteredRestaurants(filteredNonVegRestaurants);
        }}
      >
        Non-Veg
      </button>

      <button
        className="reset-filter-btn flt-btn"
        onClick={() => {
          setListOfFilteredRestaurants(listOfAllRestaurants);
          setSearchResult("");
          setSearchText("");
        }}
      >
        Reset all filter
      </button>

      <div className="rest-list">
        {listOfAllRestaurants?.length === 0 ? (
          <ShimmerUI />
        ) : (
          listOfFilteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard
                key={restaurant.info.id}
                restaurantData={restaurant.info}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
