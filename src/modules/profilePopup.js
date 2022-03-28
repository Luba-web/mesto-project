import { openPopup, closePopup } from "../modules/modal";

const popupProfile = document.querySelector("#profile");
const btnProfileSave = document.querySelector("#profileForm");
const btnPen = document.querySelector(".profile__button-pen");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const profileEditForm = document.forms["profileForm"];
const nameInput = profileEditForm.elements.firstName;
const jobInput = profileEditForm.elements.profession;

//функция 'Submit profileForm'
export function formSubmitProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// общая функция для развещивания слушателей
export function setProfileListeners() {
// кнопки сохранения popupProfile и CardMesto
  btnProfileSave.addEventListener("submit", formSubmitProfile);

  //добавляем слушатели для модального окна popupProfile
  btnPen.addEventListener("click", () => {
    openPopup(popupProfile);
  });
}
