//функции валидации
const showInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(config.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
};

const checkInputValidity = (errorElement, inputElement, config) => {
  if (!inputElement.checkValidity()) {
    showInputError(errorElement, inputElement, config);
  } else {
    hideInputError(errorElement, inputElement, config);
  }
};

export const toggleButtonState = (button, isActive = false, config) => {
  if(isActive){
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
  } else {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = 'disabled';
  }
};

const setEventListers = (formElement, config) => {
  const inputsList = formElement.querySelectorAll(config.inputSelector);
  const submitButton = formElement.querySelector(config.submitButtonSelector);

  Array.from(inputsList).forEach(inputElement => {
      inputElement.addEventListener('input', () => {
          checkInputValidity(formElement, inputElement, config);
          toggleButtonState(submitButton, formElement.checkValidity(), config);
      })
  })

  formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('отправка формы');
      toggleButtonState(submitButton, formElement.checkValidity(), config);
  })

};

export const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);
  Array.from(forms).forEach(form => {
      setEventListers(form, config);
  })
};
