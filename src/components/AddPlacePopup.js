import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      name="popup-add"
      title="Новое место"
      buttonText="Создать"
      // isOpen={isAddPlacePopupOpen}
      // onClose={closeAllPopups}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        className="popup__input popup__field-title"
        id="title"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        onChange={handleNameChange}
      />
      <span className="popup__input-error title-error"></span>
      <input
        name="link"
        type="url"
        className="popup__input popup__field-url"
        id="url"
        placeholder="Ссылка на картинку"
        required
        onChange={handleLinkChange}
      />
      <span className="popup__input-error url-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
