// Login form component that returns posts an email and pass to the backend
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    let response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.status === 200) {
      let data = await response.json();
      window.localStorage.setItem("token", data.token),
        window.localStorage.setItem("userId", data._id),
        window.localStorage.setItem("firstName", data.firstName), // These should be api calls
        window.localStorage.setItem("lastName", data.lastName); // TODO: Stop this being locally stored
      navigate("/swipe");
    } else {
      console.error("Login failed");
      setLoginMessage("Login failed");

      setTimeout(() => {
        setLoginMessage("");
      }, 3000);
    }
  };

  return (
    <div className="login-form">
      <div className="login-title">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-input">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="login-input">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="login-button">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="login-message-box">{loginMessage}</div>
    </div>
  );
};

export default LoginForm;
