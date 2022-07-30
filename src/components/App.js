// import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
// import ConfirmDeletePopup from "./ConfirmDeletePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  // const [isConfirmDeletePopup, setConfirmDeletePopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  // function handleConfirmDeleteClick() {
  //   setConfirmDeletePopup(true);
  // }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    // setConfirmDeletePopup(false);
    setSelectedCard(null);
  }

  function onCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  // Если в проекте не реализован попап подтверждения удаления карточки, то сохранение стейта карточек следует выполнять через колбэк-функцию,
  // как сохраняются данные лайка карточки. Сейчас, если у пользователя будет низкая скорость интернета,
  // и он начнёт удалять подряд несколько карточек, к примеру 3 карточки, то при удалении со страницы второй карточки,
  // предыдущая удалённая снова появится на странице.
  // После удаления третьей появится вторая. То есть со страницы удалится только третья.
  // Это связано с тем, что cards берется во время выполнения из замыкания, а так как операция выполняется асинхронно,
  // то при удалении каждой карточки в setCards будет передаваться разный cards,
  // пример: setState(prevState=> prevState.filter())

  function handleCardDelete(card) {
    api
      .delete(card._id)
      .then(() => {
        setCards((prevCards) => prevCards.filter((item) => item !== card));
      })
      .catch((err) => console.log(err));
  }

  function onUpdateUser(userData) {
    api
      .setUserInfoApi(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function onUpdateAvatar(userData) {
    api
      .handleUserAvatar(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(cardData) {
    api
      .addUserCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          // onConfirmDelete={handleConfirmDeleteClick}
          onCardClick={onCardClick}
          cards={cards}
          handleCardLike={handleCardLike}
          handleCardDelete={handleCardDelete}
        />
        <Footer />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={onUpdateAvatar}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={onUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        {/* <ConfirmDeletePopup
          isOpen={isConfirmDeletePopup}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
        /> */}

        {/* <PopupWithForm
          name="popup-confirm"
          title="Вы уверены?"
          buttonText="Да"
        /> */}

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
