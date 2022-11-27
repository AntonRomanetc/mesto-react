function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_action_image-preview ${card ? 'popup_opened' : ''}`}>
      <div className="popup__preview-container">
        <button
          onClick={onClose}
          type="button"
          className="popup__close-button"
        />
          <img className="popup__image-preview-url" src={card?.link} alt={card?.name} />
          <h3 className="popup__image-preview-title">{card?.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;