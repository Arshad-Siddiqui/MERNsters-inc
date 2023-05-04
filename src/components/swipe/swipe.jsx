import Deck from "../deck/deck";
import NavBar from "../lib/navbar";
import "./swipe.css";

export default function Swipe() {
  return (
    <div className="swipe-container">
      <NavBar linkTo={"logout"} />
      <Deck />
    </div>
  );
}
