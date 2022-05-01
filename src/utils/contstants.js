const btnImgAvatar = document.querySelector('.profile__avatar');

const btnPen = document.querySelector('.profile__button-pen');
const btnCardMestoAdd = document.querySelector('#profileAdd');

const user = { id: '' };

//переменная для валидации
const validateConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_disabled',
  inputErrorClass: 'form__input_condition_invalid',
};

//переменная для информации по юзеру
const userConfig = {
  name: '.profile__title',
  about: '.profile__subtitle',
  avatar: '.profile__avatar',
}

//переменная для инпутов
const inputConfig = {
  name: document.querySelector('#firstName'),
  about: document.querySelector('#profession'),
}

export { btnImgAvatar, btnPen, btnCardMestoAdd, user, validateConfig, userConfig, inputConfig }; 