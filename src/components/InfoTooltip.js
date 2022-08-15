import React from "react";
import Popup from "./Popup";
import successPicture from "../images/failure.svg";
import rejectPicture from "../images/success.svg";

function InfoTooltip({ namePopup, isOpen, onClose, isSuccess }) {
  return (
    <Popup isOpen={isOpen} namePopup={namePopup} onClose={onClose}>
      <div className="tooltip">
        <img
          className="tooltip__img"
          src={isSuccess ? successPicture : rejectPicture}
          alt="Статус о регистрации"
        />
        <div className="tooltip__caption">
          {isSuccess
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз."}
        </div>
      </div>
    </Popup>
  );
}

export default InfoTooltip;
