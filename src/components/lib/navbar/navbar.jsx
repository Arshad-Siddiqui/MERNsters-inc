import "./navbar.css";
import { Link } from "react-router-dom";
import capitalizeFirstLetter from "../capitalise";
import Logo from "../logo/logo";

export default function NavBar({ linkTo }) {
  return (
    <div className="navbar">
      <Logo linkTo="/" color="white" />
      <div className="navbar-links">
        <Link to={`/${linkTo}`} className="link">
          {capitalizeFirstLetter(linkTo)}
        </Link>
      </div>
    </div>
  );
}
