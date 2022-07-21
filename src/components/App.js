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
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />      
      <PopupWithForm
        name="popup-avatar"
        title="Обновить аватар"
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

      {/* <div className="popup popup-edit">
        <div className="popup__container">
          <button className="popup__button-close" type="button"></button>
          <form className="popup__form" name="edit" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>

            <fieldset className="popup__field">
              <input
                className="popup__input popup__field-name"
                type="text"
                placeholder="Имя"
                required
                minlength="2"
                maxlength="40"
                id="name"
                name="userName"
              />
              <span className="popup__input-error name-error"></span>

              <input
                className="popup__input popup__field-about-name"
                type="text"
                placeholder="О себе"
                required
                minlength="2"
                maxlength="200"
                id="aboutname"
                name="userAbout"
              />
              <span className="popup__input-error aboutname-error"></span>
              <button type="submit" className="popup__button">
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div> */}

      <PopupWithForm
        name="popup-add"
        title="Новое место"
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

      {/* <div className="popup popup-add">
        <div className="popup__container">
          <button className="popup__button-close" type="button"></button>
          <form className="popup__form" id="add" name="add" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <fieldset className="popup__field">
              <input
                className="popup__input popup__field-title"
                type="text"
                placeholder="Название"
                minlength="2"
                maxlength="30"
                required
                id="title"
                name="name"
              />
              <span className="popup__input-error title-error"></span>
              <input
                className="popup__input popup__field-url"
                type="url"
                placeholder="Ссылка на картинку"
                required
                id="url"
                name="link"
              />
              <span className="popup__input-error url-error"></span>
              <button
                type="submit"
                className="popup__button popup__button_disabled"
              >
                Создать
              </button>
            </fieldset>
          </form>
        </div>
      </div> */}

      {/* <div className="popup popup_img">
        <div className="popup__container popup__container-img">
          <div className="popup__img-box">
            <img className="popup__images" src="#" alt="" />
            <p className="popup__title-img"></p>
            <button type="button" className="popup__button-close"></button>
          </div>
        </div>
      </div> */}

      {/* <div className="popup popup-avatar">
        <div className="popup__container">
          <button className="popup__button-close" type="button"></button>
          <form className="popup__form" name="avatar" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <fieldset className="popup__field">
              <input
                type="url"
                className="popup__input popup__input_avatar-link"
                id="form-input-avatar-link"
                name="userAvatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="popup__input-error form-input-avatar-link-error"></span>
              <button
                type="submit"
                className="popup__button popup__button_disabled"
              >
                Сохранить
              </button>
            </fieldset>
          </form>
        </div>
      </div> */}

      <PopupWithForm name='popup-confirm"' title="Вы уверены?" />
      <ImagePopup />

      {/* <div className="popup popup-confirm">
        <div className="popup__container">
          <button
            className="popup__button-close"
            type="button"
            aria-label="Закрыть"
          ></button>
          <form className="popup__form" name="popupForm" novalidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__button">
              Да
            </button>
          </form>
        </div>
      </div> */}

      {/* <template className="elements__template">
        <li className="elements__card">
          <img className="elements__img" />
          <div className="elements__inner-container">
            <h2 className="elements__title"></h2>
            <div className="elements__like-container">
              <button className="elements__icon-like" type="button"></button>
              <span className="elements__like-counter">0</span>
            </div>
            <button className="elements__icon-delete" type="button"></button>
          </div>
        </li>
      </template> */}
    </div>
  );
}

export default App;
