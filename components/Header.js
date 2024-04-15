import { LOGO_IMAGE } from "../utils/constants";

const Header = () => {  
  return (
    <nav className="nav-bar">
      <div>
        <img src={LOGO_IMAGE} alt="logo" className="logo" />
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

export default Header;