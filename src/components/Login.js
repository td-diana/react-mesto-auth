import React from "react";
import AuthForm from "./AuthForm";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChande(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  }

  return (
    <AuthForm
      submit={handleSubmit}
      onChange={handleChande}
      submitName="Войти"
      emailValue={email}
      passwordValue={password}
    />
  );
}

export default Login;
