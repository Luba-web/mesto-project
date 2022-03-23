const popupProfile = document.querySelector("#profile");
const popupCardMesto = document.querySelector("#cardMesto");
const popupImages = document.querySelector("#popupImages");
const btnPen = document.querySelector(".profile__button-pen");
const btnProfileSave = document.querySelector("#profileForm");
const btnCardMestoAdd = document.querySelector("#profileAdd");
const btnCardMestoSave = document.querySelector("#cardMestoForm");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");
const popupPhoto = document.querySelector("#photoMesto");
const cardContainer = document.querySelector(".cards");
const cardTemlate = document.querySelector("#cardTemplate").content;

const profileEditForm = document.forms["profileForm"];
const nameInput = profileEditForm.elements.firstName;
const jobInput = profileEditForm.elements.profession;
const cardEditMestoForm = document.forms["cardMestoForm"];
const nameInputCard = cardEditMestoForm.elements.nameImg;
const linkInputCard = cardEditMestoForm.elements.linkImg;

// картинки для карточек
// вебпак добавит в переменные правильные пути
const masyImage = new URL("./images/1.jpg", import.meta.url);
const susyImage = new URL("./images/2.jpg", import.meta.url);
const vasyImage = new URL("./images/3.jpg", import.meta.url);
const lasyImage = new URL("./images/4.jpg", import.meta.url);
const osyImage = new URL("./images/5.jpg", import.meta.url);
const bosyImage = new URL("./images/6.jpg", import.meta.url);

export const initialCards = [
  {
    name: "Мася",
    link: masyImage,
  },
  {
    name: "Суся",
    link: susyImage,
  },
  {
    name: "Вася",
    link: vasyImage,
  },
  {
    name: "Ляся",
    link: lasyImage,
  },
  {
    name: "Ося",
    link: osyImage,
  },
  {
    name: "Мистер Бося Старший",
    link: bosyImage,
  },
];

//переменная для валидации
export const config = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_disabled',
  inputErrorClass: 'form__input_condition_invalid',
}

export {popupProfile, popupCardMesto, popupImages, btnPen, btnProfileSave,
  btnCardMestoAdd, btnCardMestoSave};
export {profileName, profileJob, popupPhoto, cardContainer, cardTemlate};
export {profileEditForm, nameInput, jobInput, cardEditMestoForm, nameInputCard, linkInputCard};