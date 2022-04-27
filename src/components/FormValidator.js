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
