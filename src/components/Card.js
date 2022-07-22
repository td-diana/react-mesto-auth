import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__card">
      <img
        src={props.card.link}
        className="elements__img"
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="elements__inner-container">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-container">
          <button type="button" className="elements__icon-like"></button>
          <span className="elements__like-counter">
            {props.card.likes.length}
          </span>
        </div>
      </div>
      <button className="elements__icon-delete"></button>
    </li>
  );
}

export default Card;
