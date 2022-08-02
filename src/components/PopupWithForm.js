function PopupWithForm({
  name,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
  title,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div onClick={onClose} className="popup__overlay"></div>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={onClose}
        ></button>
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
      </div>      
    </div>
    
  );
}

export default PopupWithForm;

// function PopupWithForm(props) {

//   return (
//     <div
//       className={`popup popup_${props.name} ${
//         props.isOpen ? "popup_opened" : ""
//       }`}
//       >
//       <div className="popup__container">
//         <button
//           type="button"
//           className="popup__button-close"
//           onClick={props.onClose}
//         ></button>
//         <form
//           className="popup__form"
//           name={props.name}
//           // noValidate
//           onSubmit={props.onSubmit}
//         >
//           <h2 className="popup__title">{props.title}</h2>
//           {props.children}
//           <fieldset className="popup__field">
//             <button type="submit" className="popup__button">
//               {props.buttonText}
//             </button>
//           </fieldset>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PopupWithForm;
