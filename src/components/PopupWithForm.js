import React from "react";
import Popup from "./Popup";

function PopupWithForm({
  name,
  namePopup,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
  title,
}) {
  return (
    <Popup isOpen={isOpen} namePopup={namePopup} onClose={onClose}>
      <form
        className="popup__form"
        name={name}
        // noValidate
        onSubmit={onSubmit}
      >
        <h2 className="popup__title">{title}</h2>
        {children}
        <fieldset className="popup__field">
          <button type="submit" className="popup__button">
            {buttonText}
          </button>
        </fieldset>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
