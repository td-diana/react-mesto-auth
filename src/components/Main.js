function Main({onEditAvatar}) {
  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <img className="profile__avatar" alt="" />
            <button
              type="button"
              className="profile__button-avatar-edit"
              onClick={onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__inner-container">
              <h1 className="profile__name"></h1>
              <button className="profile__button-edit" type="button"></button>
            </div>
            <h2 className="profile__about-name"></h2>
          </div>
        </div>
        <button className="profile__button-add" type="button"></button>
      </section>
      <section className="elements">
        <ul className="elements__list"></ul>
      </section>
    </main>
  );
}

export default Main;
