import { LOGO_IMAGE } from "../utils/constants";
import { useState } from "react";

const Header = () => {  

const [authState, setAuthState] = useState("Sign-In");

  return (
    <nav className="nav-bar">
      <div>
        <img src={LOGO_IMAGE} alt="logo" className="logo" />
      </div>

      <div className="nav-items">
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>

        <button className="signIn-btn" onClick={
          () => {
            setAuthState(authState === "Sign-In" ? "Sign-Out" : "Sign-In");
          }
        }>{authState}</button>
      </div>
    </nav>
  );
}

export default Header;