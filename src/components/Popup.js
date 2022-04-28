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
      console.log('fssss')
      if (
        event.target.classList.contains('popup') ||
        event.target.classList.contains('popup__button-close')
      ) {
        this.closePopup();
      }
    });
  }
}

// export const popupTest = new PopupWithForm('.popup-profile');
// // popupTest.openPopup();
// // popupTest.closePopup();
// popupTest.setEventListeners();

// const page = document.querySelector('.page');

// //функция открытие модального окна и закрытия на esc
// export function openPopup(popup) {
//   popup.classList.add('popup_opened');
//   page.addEventListener('keydown', handleEsс);
//   page.addEventListener('click', handleOverlayAndCloseClick);
// }

// //функция закрытие модального окна
// export function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   page.removeEventListener('keydown', handleEsс);
//   page.removeEventListener('click', handleOverlayAndCloseClick);
// }

// //функция закрытие на ECS
// const handleEsс = (event) => {
//   if (event.key === 'Escape') {
//     const activePopup = document.querySelector('.popup_opened');
//     closePopup(activePopup);
//   }
// }

// //функция закрытие крестик или по клику на оверлей
// const handleOverlayAndCloseClick = (event) => {
//   const popup = event.target.closest('.popup');
//   if (
//     event.target.classList.contains('popup') ||
//     event.target.classList.contains('popup__button-close')
//   ) {
//     closePopup(popup);
//   }
// }

//функция изменения текста кнопки уедит в popupForm
export const changeBtnLoading = (isLoading, bntSaved) => {
  if (isLoading) {
    bntSaved.textContent = 'Сохранение..';
  } else {
    bntSaved.textContent = 'Сохранить'
  }
}
