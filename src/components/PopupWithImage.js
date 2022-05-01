import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector)
    this._popupImages = this._container.querySelector('.popup-images');
    this._popupPhoto = this._container.querySelector('.popup__images');
    this._caption = this._container.querySelector('.popup__caption');
  }

  openPopup(cardNew) {
    super.openPopup()
    this._popupPhoto.src = cardNew.link;
    this._popupPhoto.alt = cardNew.name;
    this._caption.textContent = cardNew.name;
  }
}