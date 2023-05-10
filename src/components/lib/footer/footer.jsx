import "./footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        <a href="www.facebook.com">
          <i className="fa-brands fa-facebook fa-2x" />
        </a>{" "}
        &nbsp;
        <a href="www.twitter.com">
          <i className="fa-brands fa-twitter fa-2x" />
        </a>{" "}
        &nbsp;
        <a href="www.instagram.com">
          <i className="fa-brands fa-instagram fa-2x" />
        </a>
      </p>
    </div>
  );
}
