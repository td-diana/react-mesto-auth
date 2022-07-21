import React from 'react'
import { api } from '../utils/Api'

function Main({ onEditAvatar, onAddPlace, onEditProfile }) {
  const [userName, setUserName] = React.useState('sadf')
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()

  React.useEffect(() => {
    api.getUserInfo().then((data) => {      
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
}, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" alt="" style={{ backgroundImage: `url(${userAvatar})` }}  />
            {/* src={userAvatar} */}
            <button
              type="button"
              className="profile__button-avatar-edit"
              onClick={onEditAvatar}
            ></button>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__button-edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <h2 className="profile__about-name">{userDescription}</h2>
        </div>
        <button
          type="button"
          className="profile__button-add"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
