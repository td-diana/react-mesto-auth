import React from "react";
import { Route, Link, Routes } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo"></div>
   
    <Link to="/sign-in" className="header__title-auth">
        Войти
      </Link>
      <Link to="/sign-up" className="header__title-auth">
        Регистрация
      </Link>  
    </header>
  );
}

export default Header;
