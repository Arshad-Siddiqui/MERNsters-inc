import LoginForm from "../../components/login/loginForm";
import LoginMessage from "../../components/login/loginMessage";
import NavBar from "../../components/lib/navbar/navbar";
import { useEffect, useState } from "react";
import "./login.css";

const LoginPage = () => {
  useEffect(() => {
    document.title = "FriendZone - Login";
  });

  const [loginMessage, setLoginMessage] = useState(""); // Used to show error messages to user

  return (
    <div className="login-page">
      <NavBar linkTo="signup" />
      <LoginForm setLoginMessage={setLoginMessage} />
      <LoginMessage loginMessage={loginMessage} />
    </div>
  );
};

export default LoginPage;
