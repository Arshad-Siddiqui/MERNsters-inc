import "./loginMessage.css";

export default function LoginMessage({ loginMessage }) {
  return (
    <>
      <div className="login-message-box">{loginMessage}</div>
    </>
  );
}
