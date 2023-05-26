import NavBar from "../../components/lib/navbar/navbar";
import SignupForm from "../../components/signup/signup";

export default function Signup() {
  return (
    <div className="signup-page">
      <NavBar linkTo="login" />
      <SignupForm />
    </div>
  );
}
