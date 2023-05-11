import Deck from "../deck/deck";
import NavBar from "../lib/navbar/navbar";
import "./swipe.css";
import { useEffect } from "react";

export default function Swipe() {
  useEffect(() => {
    document.title = "FriendZone - Swipe";
  });

  return (
    <div className="swipe-container">
      <NavBar linkTo={"logout"} />
      <Deck />
    </div>
  );
}
