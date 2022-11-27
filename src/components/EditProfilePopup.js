import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/currentUserContext';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState();
  const [description, setDescription] = React.useState();

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangeDescription = (evt) => {
    setDescription(evt.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      {...props}
      type={'edit_profile'}
      title={'Редактировать профиль'}
      textButton={'Сохранить'}
      onSubmit={handleSubmit}
    >
        <input
          onChange={handleChangeName}
          id="name-profile"
          type="text"
          name="name"
          className="form__input form__input_data_name"
          value={name || ''}
          placeholder="Имя"
          required
          minLength="2"
          maxLength="40"
          aria-label="Имя"
        />
        <span className="input-name-error form__input-error" />

        <input
          onChange={handleChangeDescription}
          id="job-profile"
          type="text"
          name="about"
          className="form__input form__input_data_about"
          value={description || ''}
          placeholder="Увлечение/работа"
          required
          minLength="2"
          maxLength="200"
          aria-label="О себе"
        />
        <span className="input-about-error form__input-error" />

    </PopupWithForm>
  );
}

export default EditProfilePopup;