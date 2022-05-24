export default class Popup {
  constructor(selector) {
    this._selector = selector;
    this._container = document.querySelector(this._selector);
    this._handleEsс = this._handleEsс.bind(this);
  }

  //функция открытие модального окна и закрытия на esc
  openPopup() {
    this._container.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEsс);
  }

  //функция закрытие модального окна
  closePopup() {
    this._container.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEsс);
  }

  //функция закрытие на ECS
  _handleEsс(event) {
    if (event.key === 'Escape') {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._container.addEventListener('click', (event) => {
      if (
        event.target.classList.contains('popup') ||
        event.target.classList.contains('popup__button-close')
      ) {
        this.closePopup();
      }
    });
  }
}
