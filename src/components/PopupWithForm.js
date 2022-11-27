function PopupWithForm(props) {
  const IsLoading =
    props.IsLoading || 'Сохранение...';
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button"
        />
        <h2 className="popup__title">{props.title}</h2>
        <form
          onSubmit={props.onSubmit}
          name={props.type}
          className="popup__form"
          noValidate
        >
          {props.children}

          <button type="submit" className="form__submit-button">
            {props.isLoading
              ? IsLoading
              : props.textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;