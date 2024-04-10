import React from 'react';
import ReactDOM from 'react-dom';

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

const Card = () => {
  return (
    <div className="rest-card">
      <img
        src="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
        alt="logo"
        className="rest-card-image"
      />
      <h1 className="rest-name-h1">Meghana Biryani</h1>
      <h2 className="rest-cusine-h2">Cusine: Biryani, Indian</h2>
      <p className="rest-info-p">Rating: 4.5</p>
      <p className="rest-info-p">Price for two: INR 500</p>
      <p className="rest-info-p">Delivary Time: 45 Min</p>
    </div>
  );
}

const Restaurants = () => {  
  return (
    <div className="rest-list">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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