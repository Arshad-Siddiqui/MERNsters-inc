import LoginForm from "./loginForm";
import NavBar from "../lib/navbar/navbar";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    document.title = "FriendZone - Login";
  });

  return (
    <>
      <NavBar linkTo="signup" />
      <div className="login-page">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
