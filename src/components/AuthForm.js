import React from "react";

function AuthForm({ title, emailValue, passwordValue, submitName, onChange }) {
  return (
    <div className="login">
      <h2 className="login__title">{title}</h2>
      <form className="login__form">
        <input
          className="login__input"
          placeholder="Email"
          value={emailValue}
          type="email"
          name="email"
          id="email"
          required
          onChange={onChange}
        />
        <input
          className="login__input"
          placeholder="Пароль"
          value={passwordValue}
          type="password"
          name="password"
          id="password"
          required
          onChange={onChange}
        />
        <button type="submit" className="login__button">
          {submitName}
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
