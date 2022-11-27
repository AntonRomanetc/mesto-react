import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [place, setPlace] = React.useState({
    name: '',
    link: '',
  });

  const handleChange = (evt) => {
    setPlace((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlaceSubmit(place);
  }

  React.useEffect(() => {
    setPlace({
      name: '',
      link: '',
    });
  }, [props.isOpen]);

  return (
    <PopupWithForm
      {...props}
      type={'add_card'}
      title={'Новое место'}
      textButton={'Создать'}
      onSubmit={handleSubmit}
    >
        <input
          onChange={handleChange}
          value={place.name || ''}
          id="card-name"
          type="text"
          name="name"
          className="form__input form__input_data_image-title"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          aria-label="Имя"
        />
        <span className="input-image-title-error form__input-error"></span>

        <input
          onChange={handleChange}
          value={place.link || ''}
          id="card-link"
          type="url"
          name="link"
          className="form__input form__input_data_image-url"
          placeholder="Ссылка на картинку"
          required
          aria-label="Ссылка на картинку"
        />
        <span className="input-image-url-error form__input-error"></span>

    </PopupWithForm>
  );
}

export default AddPlacePopup;