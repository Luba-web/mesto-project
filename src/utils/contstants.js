//переменная для карточек
export const cardContainer = document.querySelector('.cards');
//переменная для валидации
export const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_disabled',
  inputErrorClass: 'form__input_condition_invalid',
};

//переменная для информации по юзеру
export const userConfig = {
  name: '.profile__title',
  about: '.profile__subtitle',
  avatar: '.profile__avatar',
}

//переменная для инпутов
export const inputConfig = {
  name: document.querySelector('#firstName'),
  about: document.querySelector('#profession'),
}