function ImagePopup({ card, onClose, isOpen }) {
  return (
    <div className={`popup popup__img ${isOpen && "popup_opened"}`}>
      <div className="popup__overlay" onClick={onClose}></div>      
      <div className="popup__container-img">
        <div className="popup__img-box">
          <img
            src={card?.link}
            className="popup__images"
            alt={card ? card.name : ""}
          />
          <p className="popup__title-img">{card ? card.name : ""}</p>
        </div>
        <button
          type="button"
          className="popup__button-close"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
