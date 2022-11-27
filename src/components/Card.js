import React from 'react';
import CurrentUserContext from '../contexts/currentUserContext';

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardDeleteButtonClassName = `cardElement__delete-button ${
    isOwn ? " " : "cardElement__delete-button_hidden"
  }`;
  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (

      <article className="cardElement">
        <img onClick={handleClick} src={card.link} alt={card.name} className="cardElement__image" />
      <div className="cardElement__caption">
        <h2 className="cardElement__title">{card.name}</h2>
        <div className="cardElement__like">
          <button
            onClick={handleLikeClick}
            type="button"
            aria-label="Нравится"
            className={`cardElement__like-button ${isLiked ? 'cardElement__like-button_active' : ''}`}
          />
          <p className="cardElement__likes">{card.likes.length}</p>
        </div>
        </div>
        <button
        type="button"
        className={cardDeleteButtonClassName}
        aria-label="Удалить"
        onClick={handleDeleteClick}
      ></button>
        </article>
  );
}

export default Card;