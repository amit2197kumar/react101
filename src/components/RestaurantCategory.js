import ItemList from './ItemList';
import { useState } from 'react';

const RestaurantCategory = ({ category, showItem, setShowItemIndex }) => {
  const handleClick = () => {
    setShowItemIndex();
  };

  return (
    <div>
      <div className="w-8/12 bg-gray-100 shadow-lg p-5 m-auto my-5">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {category.title} (
            {category?.categories?.length
              ? category?.categories?.length
              : category?.itemCards?.length}
            )
          </span>
          <span>{"🔻"}</span>
        </div>
        <div>
          {showItem &&
            category?.itemCards?.map((item) => (
              <ItemList key={item?.card?.info?.id} items={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;