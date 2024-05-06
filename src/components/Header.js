import { LOGO_IMAGE } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {  

const [authState, setAuthState] = useState("Sign-In");

  return (
    <nav className="flex bg-gray-100 justify-between items-center">
      <div>
        <img src={LOGO_IMAGE} alt="logo" className="w-40" />
      </div>

      <div className="nav-items flex">
        <ul className="flex space-x-10 font-bold text-lg">
          <li className="bg-white border border-solid border-black px-5 py-2 rounded-md hover:bg-gray-200">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-white border border-solid border-black px-5 py-2 rounded-md hover:bg-gray-200">
            <Link to="/about">About</Link>
          </li>
          <li className="bg-white border border-solid border-black px-5 py-2 rounded-md hover:bg-gray-200">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="bg-white border border-solid border-black px-5 py-2 rounded-md hover:bg-gray-200">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>

        <button
          className="color-white bg-gray-300 p-2 rounded-md ml-10 px-5 py-3 mr-10"
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