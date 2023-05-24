import NavBar from "../../components/lib/navbar/navbar";
import "./notfound.css";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <NavBar linkTo="login" />
      <h1>404: Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/">Return Home</a>
    </div>
  );
}
