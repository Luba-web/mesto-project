import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
  constructor(selector, { handleSubmitDelete }) {
    super(selector)
    this._form = this._container.querySelector('.form');
    this._handleSubmitDelete = handleSubmitDelete;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonSubmit = this._form.querySelector('.form__button-save');

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      const btnText = this._buttonSubmit.textContent;
      this._buttonSubmit.textContent = 'Сохраниние...'
      this._handleSubmitDelete(this._card, this._cardElement)
        .then(() => {
          this.closePopup();
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this._buttonSubmit.textContent = btnText;
        });
    })
  }

  getCard(card, element) {
    this._card = card;
    this._cardElement = element;
  }

}
