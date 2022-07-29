import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="popup-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input popup__input_avatar-link"
        id="form-input-avatar-link"
        name="userAvatar"
        placeholder="Ссылка на картинку"
        required
        ref={avatarRef}
      />
      <span className="popup__input-error form-input-avatar-link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
