import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(selector, submitForm) {
    super(selector);
    this._submitForm = submitForm;
    this._form = this._container.querySelector('.form');
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.form__input');
    // создаём пустой объект
    this._formValues = {};

    // добавляем в этот объект значения всех полей
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    // возвращаем объект значений
    return this._formValues;
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit = this._form.querySelector('.form__button-save');

    //нужно на форму повестить обработчик
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      const btnText = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = 'Сохраниние...'

      this._profileData = this._getInputValues();

      this._submitForm(this._profileData)
        .then(() => {
          this.closePopup()
        })
        .finally(() => {
          this._buttonSubmit.textContent = btnText;
        });
    })
  }

}
