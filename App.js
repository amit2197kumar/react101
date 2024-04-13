import React from 'react';
import ReactDOM from 'react-dom';
import restList from './mockData'

/**
 * Navbar
 *  - Logo
 *  - Links
 * Body 
 *  - Card
 *      -image
 */

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div>
        <img
          src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3"
          alt="logo"
          className="logo"
        />
      </div>

      <div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </nav>
  );
}

const Card = ({ restaurantData }) => {

  const {
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
    cloudinaryImageId,
  } = restaurantData.data;

  return (
    <div className="rest-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="logo"
        className="rest-card-image"
      />
      <h1 className="rest-name-h1">{name}</h1>
      <h2 className="rest-cusine-h2">{cuisines.join(", ")}</h2>
      <p className="rest-info-p">{avgRating}</p>
      <p className="rest-info-p">{costForTwoString}</p>
      <p className="rest-info-p">{deliveryTime} Mins</p>
    </div>
  );
};

const Restaurants = () => {  
  return (
    <div className="rest-list">
      {restList.map((restaurant) => {
        return <Card key={restaurant.data.id} restaurantData={restaurant} />;
      })}
    </div>
  );
}


const App = () => {
  return (
    <div>
      <Navbar />
      <Restaurants />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));