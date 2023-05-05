import LoginForm from "./loginForm";
import NavBar from "../lib/navbar/navbar";

const LoginPage = () => {
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
