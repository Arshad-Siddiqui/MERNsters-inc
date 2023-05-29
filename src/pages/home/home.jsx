import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import NavBar from "../../components/lib/navbar/navbar";

export default function Homepage() {
  useEffect(() => {
    document.title = "FriendZone - Home";
  });

  return (
    <div className="homepage">
      <NavBar linkTo="login" />
      <div className="homepage-form">
        <div className="signup-title">
          <h1>Get in the zone.</h1>
        </div>

        <Link to="/signup">
          <div className="signup-button">
            <b>Join friendzone</b>
          </div>
        </Link>
        {/* TODO: Create an about page */}
        <Link to="/about" className="about-button">
          <div className="about-button-text">About</div>
        </Link>
      </div>
    </div>
  );
}
