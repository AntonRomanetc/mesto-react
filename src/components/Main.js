import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/currentUserContext';

function Main({
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const listCards = cards.map((card) => (
    <Card
      key={card._id}
      card={card}
      onCardClick={onCardClick}
      onCardLike={onCardLike}
      onCardDelete={onCardDelete}
    />
  ));

  return (
    <main className="content">
      <section className="profile">
      <div className="profile__personal-data">
        <div className="profile__avatar-item">
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар профиля"
          />
          <button className="profile__avatar-edit-button" onClick={onEditAvatar} aria-label="Редактировать аватар"></button>
        </div>
          
        <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__about">{currentUser.about}</p>
            <button
              onClick={onEditProfile}
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit-button"
            />
        </div>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          aria-label="Добавить карточку"
          className="profile__add-button"
        />
      </section>

      <section className="cards">
        {listCards}
      </section>
    </main>
  );
}

export default Main;