import React from "react";
import AuthForm from "./AuthForm";
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password);
  }
  return (
    <>
    <AuthForm      
      title="Регистрация"
      submitName="Зарегистрироваться"
      submit={handleSubmit}
      onChange={handleChange}
      emailValue={email}
      passwordValue={password}
    />
    <div className="login__details">
        <Link to="/sign-in" className="login__link">
          Уже зарегистрированы? Войти
        </Link>
      </div>
      </>
  );
}

export default Register;
