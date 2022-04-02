//переменная для карточек
export const cardContainer = document.querySelector(".cards");
//переменная для валидации
export const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button-save",
  inactiveButtonClass: "form__button-save_disabled",
  inputErrorClass: "form__input_condition_invalid",
};

//api 
// Токен: cb8f559f-5b92-4512-9828-0e4dd400de93
// Идентификатор группы: plus-cohort-8
export const configApi = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-8/",
  headers: {
    authorization: "cb8f559f-5b92-4512-9828-0e4dd400de93",
    "Content-Type": "application/json"
  }
}