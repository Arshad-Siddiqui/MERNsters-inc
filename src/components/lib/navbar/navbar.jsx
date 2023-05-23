import "./navbar.css";
import { Link } from "react-router-dom";
import capitalizeFirstLetter from "../capitalise";
import longLogo from "../../../assets/images/longLogo.png";

export default function NavBar({ linkTo }) {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        FriendZone
      </Link>
      <div className="navbar-links">
        <Link to={`/${linkTo}`} className="link">
          {capitalizeFirstLetter(linkTo)}
        </Link>
      </div>
    </div>
  );
}
