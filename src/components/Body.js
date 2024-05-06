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
    <div className="bg-gray-100 m-0">
      <div className="ml-10 pt-5">
        <input
          type="text"
          placeholder="Search for restaurants or cuisines"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-auto border rounded-lg border-black-500 bg-white-500 text-black px-2 py-1"
        />
        <button
          className="border rounded-lg border-black-400 bg-gray-500 text-white px-2 py-1 ml-2"
          onClick={() => {
            const filteredRestaurants = searchRestaurant(
              searchText,
              listOfAllRestaurants
            );
            if (filteredRestaurants.length === 0) {
              setSearchResult(
                <h2 className="m-2 font-bold text-red-600">
                  No Match Found !!! Try other restaurants or cuisines.
                </h2>
              );
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
        className="border rounded-lg border-black-400 bg-yellow-300 text-black px-2 py-1 ml-10 mt-5"
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
        className="border rounded-lg border-black-400 bg-green-300 text-black px-2 py-1 ml-2 mt-5"
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
        className="border rounded-lg border-black-400 bg-red-500 text-black px-2 py-1 ml-2 mt-5"
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
        className="border rounded-lg border-black-400 bg-gray-500 text-white px-2 py-1 ml-2 mt-5"
        onClick={() => {
          setListOfFilteredRestaurants(listOfAllRestaurants);
          setSearchResult("");
          setSearchText("");
        }}
      >
        Reset all filter
      </button>

      <div className="m-8 flex flex-wrap">
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
