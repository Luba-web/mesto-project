export default class FormValidator {
  constructor(options, formElement) {
    this._config = options;
    this._formElement = formElement;
    this._inputsList = this._formElement.querySelectorAll(this._config.inputSelector);
    this._submitButton = this._formElement.querySelector(this._config.submitButtonSelector);

  }

  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
  }

  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;

  }

  _checkInputValidity(inputElement) {
    if (!inputElement.checkValidity()) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return Array.from(this._inputsList).some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (!this._hasInvalidInput()) {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = 'disabled';
    }
  }

  _setEventListers() {
    Array.from(this._inputsList).forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._toggleButtonState();
    });
  }

  enableValidation() {
    this._setEventListers();
  }


  resetValidation() {
    this._toggleButtonState();
    Array.from(this._inputsList).forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }
}

// //функции валидации
// const showInputError = (formElement, inputElement, config) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.add(config.inputErrorClass);
//   errorElement.textContent = inputElement.validationMessage;
// };

// const hideInputError = (formElement, inputElement, config) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(config.inputErrorClass);
//   errorElement.textContent = inputElement.validationMessage;
// };

// const checkInputValidity = (errorElement, inputElement, config) => {
//   if (!inputElement.checkValidity()) {
//     showInputError(errorElement, inputElement, config);
//   } else {
//     hideInputError(errorElement, inputElement, config);
//   }
// };

// export const toggleButtonState = (button, isActive = false, config) => {
//   if (isActive) {
//     button.classList.remove(config.inactiveButtonClass);
//     button.disabled = false;
//   } else {
//     button.classList.add(config.inactiveButtonClass);
//     button.disabled = 'disabled';
//   }
// };

// const setEventListers = (formElement, config) => {
//   const inputsList = formElement.querySelectorAll(config.inputSelector);
//   const submitButton = formElement.querySelector(config.submitButtonSelector);

//   Array.from(inputsList).forEach((inputElement) => {
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, config);
//       toggleButtonState(submitButton, formElement.checkValidity(), config);
//     });
//   });

//   formElement.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     console.log('отправка формы');
//     toggleButtonState(submitButton, formElement.checkValidity(), config);
//   });
// };

// export const enableValidation = (config) => {
//   const forms = document.querySelectorAll(config.formSelector);
//   Array.from(forms).forEach((form) => {
//     setEventListers(form, config);
//   });
// };
