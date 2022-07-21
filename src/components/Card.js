import React from "react";

function Card(props) {
  return (
    <li className="elements__card">
      <img src={props.link} className="elements__img" alt={props.name} />
      <div className="elements__inner-container">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__like-container">
          <button type="button" className="elements__icon-like"></button>
          <span className="elements__like-counter">{props.likes.length}</span>
        </div>
      </div>
      <button className="elements__icon-delete"></button>
    </li>
  );
}

export default Card;
