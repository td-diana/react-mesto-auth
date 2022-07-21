function ImagePopup() {
    return (
      <div className="popup popup_img">
        <div className="popup__container-img popup__overlay">
          <div className="ppopup__img-box">
            <img src="#" className="popup__images" alt="#" />
            <p className="popup__title-img"></p>
          </div>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>
    )
  }
  
  export default ImagePopup
