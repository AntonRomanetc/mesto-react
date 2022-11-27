import React from 'react';
import PopupWithForm from './PopupWithForm';

function CardDeletePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onConfirmDeleteCard();
  }

  return (
    <PopupWithForm
      {...props}
      type={'confirm'}
      title={'Вы уверены?'}
      textButton={'Да'}
      IsLoading={'Удаление...'}
      onSubmit={handleSubmit}
    />
  );
}

export default CardDeletePopup;