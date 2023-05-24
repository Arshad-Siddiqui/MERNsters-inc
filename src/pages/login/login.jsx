import LoginForm from "../../components/login/loginForm";
import NavBar from "../../components/lib/navbar/navbar";
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
