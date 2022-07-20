function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
        <form className="popup__form" name={props.name} novalidate>
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <fieldset className="popup__field">
            <button type="submit" className="popup__button">
              Сохранить
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
