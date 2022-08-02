import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({onUpdateAvatar, isOpen, onClose}) {
  const avatarRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });    
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="popup-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
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


// import React from "react";
// import PopupWithForm from "./PopupWithForm";

// function EditAvatarPopup(props) {
//   const avatarRef = React.useRef(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     props.onUpdateAvatar({
//       avatar: avatarRef.current.value,
//     });
//     // avatarRef.current.value = ''
//   }

//   React.useEffect(() => {
//     avatarRef.current.value = "";
//   }, [props.isOpen]);

//   return (
//     <PopupWithForm
//       name="popup-avatar"
//       title="Обновить аватар"
//       buttonText="Сохранить"
//       isOpen={props.isOpen}
//       onClose={props.onClose}
//       onSubmit={handleSubmit}
//     >
//       <input
//         type="url"
//         className="popup__input popup__input_avatar-link"
//         id="form-input-avatar-link"
//         name="userAvatar"
//         placeholder="Ссылка на картинку"
//         required
//         ref={avatarRef}
//       />
//       <span className="popup__input-error form-input-avatar-link-error"></span>
//     </PopupWithForm>
//   );
// }

// export default EditAvatarPopup;
