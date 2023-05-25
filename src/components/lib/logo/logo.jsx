import { Link } from "react-router-dom";
import "./logo.css";

export default function Logo({ linkTo, color }) {
  return (
    <Link to={linkTo} className={`navbar-logo logo-${color}`}>
      FriendZone
    </Link>
  );
}
