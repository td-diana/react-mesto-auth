function ImagePopup(props) {
  return (
    // <div className={`popup popup_img ${props.card ? "popup_opened" : ""}`}>
    <div className={`popup popup_img ${props.card && "popup_opened"}`}>
      <div className="popup__container-img">
        <div className="popup__img-box">
          <img
            // src={props.card ? props.card.link : "#"}
            src={props.card?.link}
            className="popup__images"
            alt={props.card ? props.card.name : ""}
          />
          <p className="popup__title-img">
            {props.card ? props.card.name : ""}
          </p>
        </div>
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
