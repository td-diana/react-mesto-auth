import { useState } from "react";
import AuthForm from "./AuthForm";

function Login({ handleLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(data);
  }

  return (
    <AuthForm
      title="Вход"
      submit={handleSubmit}
      onChange={handleChange}
      submitName="Войти"
      email={data.email}
      password={data.password}
      nameForm="login"
    />
  );
}

export default Login;
