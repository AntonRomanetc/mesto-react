import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarLink = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
  }

  return (
    <PopupWithForm
      {...props}
      type={'avatar'}
      title={'Обновить аватар'}
      textButton={'Сохранить'}
      onSubmit={handleSubmit}
    >
        <input
          ref={avatarLink}
          id="avatar-link"
          type="url"
          name="avatar"
          className="form__input form__input_data_avatar-url"
          placeholder="Ссылка на аватар"
          required
          aria-label="Ссылка на аватар"
        />
        <span className="input-avatar-url-error form__input-error"></span>

    </PopupWithForm>
  );
}

export default EditAvatarPopup;