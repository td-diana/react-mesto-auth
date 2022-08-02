import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onUpdateUser, onClose }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="popup-edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="userName"
        type="text"
        className="popup__input popup__field-name"
        id="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
        onChange={handleNameChange}
        value={name || ""}
      />
      <span className="popup__input-error name-error"></span>
      <input
        name="userAbout"
        type="text"
        className="popup__input popup__field-about-name"
        id="aboutname"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        onChange={handleDescriptionChange}
        value={description || ""}
      />
      <span className="popup__input-error aboutname-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

// import React from "react";
// import PopupWithForm from "./PopupWithForm";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";

// function EditProfilePopup(props) {
//   const [name, setName] = React.useState("");
//   const [description, setDescription] = React.useState("");
//   const currentUser = React.useContext(CurrentUserContext);

//   React.useEffect(() => {
//     setName(currentUser.name);
//     setDescription(currentUser.about);
//   }, [currentUser, props.isOpen]);

//   function handleNameChange(e) {
//     setName(e.target.value);
//   }

//   function handleDescriptionChange(e) {
//     setDescription(e.target.value);
//   }

//   function handleSubmit(e) {
//     // Запрещаем браузеру переходить по адресу формы
//     e.preventDefault();
//     // Передаём значения управляемых компонентов во внешний обработчик
//     props.onUpdateUser({
//       name: name,
//       about: description,
//     });
//   }

//   return (
//     <PopupWithForm
//       name="popup-edit"
//       title="Редактировать профиль"
//       buttonText="Сохранить"
//       isOpen={props.isOpen}
//       onClose={props.onClose}
//       onSubmit={handleSubmit}
//     >
//       <input
//         name="userName"
//         type="text"
//         className="popup__input popup__field-name"
//         id="name"
//         placeholder="Имя"
//         minLength="2"
//         maxLength="40"
//         required
//         onChange={handleNameChange}
//         value={name || ""}
//       />
//       <span className="popup__input-error name-error"></span>
//       <input
//         name="userAbout"
//         type="text"
//         className="popup__input popup__field-about-name"
//         id="aboutname"
//         placeholder="О себе"
//         minLength="2"
//         maxLength="200"
//         required
//         onChange={handleDescriptionChange}
//         value={description || ""}
//       />
//       <span className="popup__input-error aboutname-error"></span>
//     </PopupWithForm>
//   );
// }

// export default EditProfilePopup;
