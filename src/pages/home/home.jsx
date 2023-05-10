import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import NavBar from "../../components/lib/navbar/navbar";
import Footer from "../../components/lib/footer/footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <NavBar linkTo="login" />
      <div className="homepage-form">
        <div className="signup-title">
          <h1>Get in the zone. Join friendzone®</h1>
        </div>

        <Link to="/signup">
          <div className="signup-button">
            <b>Create account</b>
          </div>
        </Link>
        {/* TODO: Create an about page */}
        <Link to="/about">
          <div className="about-button">About</div>
        </Link>
        <div className="footer"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
