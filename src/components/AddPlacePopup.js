import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ onAddPlace, isOpen, onClose }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      namePopup="popup-add"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
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
        value={name}
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
        value={link}
      />
      <span className="popup__input-error url-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
