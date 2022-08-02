import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  // Создаём переменную для кнопки удаления
  const cardDeleteButtonClassName = `elements__icon-delete ${
    isOwn ? "" : "elements__icon-delete_status_hidden"
  }`;
  // Создаём переменную для кнопки лайка
  const cardLikeButtonClassName = `elements__icon-like ${
    isLiked ? "elements__icon-like_mod_active" : ""
  }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="elements__card">
      <img
        src={card.link}
        className="elements__img"
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="elements__inner-container">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className="elements__like-counter">{card.likes.length}</span>
        </div>
      </div>
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
    </li>
  );
}

export default Card;

// import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

// function Card(props) {
//   const currentUser = React.useContext(CurrentUserContext);
//   // Определяем, являемся ли мы владельцем текущей карточки
//   const isOwn = props.card.owner._id === currentUser._id;
//   // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
//   const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
//   // Создаём переменную для кнопки удаления
//   const cardDeleteButtonClassName = `elements__icon-delete ${
//     isOwn ? "" : "elements__icon-delete_status_hidden"
//   }`;
//   // Создаём переменную для кнопки лайка
//   const cardLikeButtonClassName = `elements__icon-like ${
//     isLiked ? "elements__icon-like_mod_active" : ""
//   }`;

//   function handleCardClick() {
//     props.onCardClick(props.card);
//   }

//   function handleLikeClick() {
//     props.onCardLike(props.card);
//   }

//   function handleDeleteClick() {
//     props.onCardDelete(props.card);
//   }

//   return (
//     <li className="elements__card">
//       <img
//         src={props.card.link}
//         className="elements__img"
//         alt={props.card.name}
//         onClick={handleCardClick}
//       />
//       <div className="elements__inner-container">
//         <h2 className="elements__title">{props.card.name}</h2>
//         <div className="elements__like-container">
//           <button
//             type="button"
//             className={cardLikeButtonClassName}
//             onClick={handleLikeClick}
//           ></button>
//           <span className="elements__like-counter">
//             {props.card.likes.length}
//           </span>
//         </div>
//       </div>
//       <button
//         className={cardDeleteButtonClassName}
//         onClick={handleDeleteClick}
//       ></button>
//     </li>
//   );
// }

// export default Card;
