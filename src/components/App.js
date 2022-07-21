import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function onCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={onCardClick}
      />
      <Footer />

      <PopupWithForm
        name="popup-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="popup__input popup__input_avatar-link"
          id="form-input-avatar-link"
          name="userAvatar"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error form-input-avatar-link-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup-edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="userName"
          type="text"
          className="popup__input popup__field-name"
          id="name"
          placeholder="Имя"
          minlength="2"
          maxlength="40"
          required
        />
        <span className="popup__input-error name-error"></span>
        <input
          name="userAbout"
          type="text"
          className="popup__input popup__field-about-name"
          id="aboutname"
          placeholder="О себе"
          minlength="2"
          maxlength="200"
          required
        />
        <span className="popup__input-error aboutname-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="popup-add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="name"
          type="text"
          className="popup__input popup__field-title"
          id="title"
          placeholder="Название"
          minlength="2"
          maxlength="30"
          required
        />
        <span className="popup__input-error title-error"></span>
        <input
          name="link"
          type="url"
          className="popup__input popup__field-url"
          id="url"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error url-error"></span>
      </PopupWithForm>
      <PopupWithForm name="popup-confirm" title="Вы уверены?" buttonText="Да" />

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
