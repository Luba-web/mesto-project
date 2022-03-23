//переменная для валидации
/*const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_disabled',
  inputErrorClass: 'form__input_condition_invalid',
}*/
import { config } from "../utils/contstants";

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const checkInputValidity = (errorElement, inputElement) => {
  if (!inputElement.checkValidity()) {
    showInputError(errorElement, inputElement);
  } else {
    hideInputError(errorElement, inputElement);
  }
};

const toggleButtonState = (button, isActive = false) => {
  if(isActive){
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
  } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = 'disabled';
  }
};

const setEventListers = (formElement) => {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButton = formElement.querySelector(config.submitButtonSelector);

  Array.from(inputsList).forEach(inputElement => {
      inputElement.addEventListener('input', () => {
          checkInputValidity(formElement, inputElement);
          toggleButtonState(submitButton, formElement.checkValidity());
      })
      toggleButtonState(submitButton, formElement.checkValidity());
  })

  formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('отправка формы');
  })

};

const enableValidation = () => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach(form => {
      setEventListers(form);
  })
};

enableValidation();

export {showInputError, hideInputError, checkInputValidity, toggleButtonState, setEventListers, enableValidation};