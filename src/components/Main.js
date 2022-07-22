import React from "react";
// import { api } from "../utils/Api";
import Card from "./Card";

function Main({
  onEditAvatar,
  onAddPlace,
  onEditProfile,
  onCardClick,
  cards,
  userName,
  userDescription,
  userAvatar,
}) {
  // const [userName, setUserName] = React.useState("");
  // const [userDescription, setUserDescription] = React.useState("");
  // const [userAvatar, setUserAvatar] = React.useState("");
  // const [cards, setCards] = React.useState([]);

  // React.useEffect(() => {
  //   api
  //     .getUserInfo()
  //     .then((data) => {
  //       setUserName(data.name);
  //       setUserDescription(data.about);
  //       setUserAvatar(data.avatar);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // React.useEffect(() => {
  //   api
  //     .getInitialCards()
  //     .then((data) => {
  //       setCards(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img
              className="profile__avatar"
              alt=""
              style={{ backgroundImage: `url(${userAvatar})` }}
            />
            <button
              type="button"
              className="profile__button-avatar-edit"
              onClick={onEditAvatar}
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__button-edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <h2 className="profile__about-name">{userDescription}</h2>
        </div>
        <button
          type="button"
          className="profile__button-add"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
