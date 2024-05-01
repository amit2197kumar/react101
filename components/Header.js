import { LOGO_IMAGE } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {  

const [authState, setAuthState] = useState("Sign-In");

  return (
    <nav className="nav-bar">
      <div>
        <img src={LOGO_IMAGE} alt="logo" className="logo" />
      </div>

      <div className="nav-items">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>

        <button
          className="signIn-btn"
          onClick={() => {
            setAuthState(authState === "Sign-In" ? "Sign-Out" : "Sign-In");
          }}
        >
          {authState}
        </button>
      </div>
    </nav>
  );
}

export default Header;