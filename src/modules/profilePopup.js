import { openPopup, closePopup } from "../modules/modal";
import { editProfileApi } from "../modules/api";

const popupProfile = document.querySelector("#profile");
const popupAvatar = document.querySelector("#avatar");
const btnProfileSave = document.querySelector("#profileForm");
const btnPen = document.querySelector(".profile__button-pen");
const btnAvatar = document.querySelector(".profile__avatar");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const profileEditForm = document.forms["profileForm"];
const nameInput = profileEditForm.elements.firstName;
const jobInput = profileEditForm.elements.profession;

const avatarForm = document.forms["avatarForm"];
const avatar = avatarForm.elements.photo;

//информация с сервера про пользователя

//функция 'Submit profileForm'
function formSubmitProfile(event) {
  event.preventDefault();
  const dataProfile = {
    name: nameInput.value,
    about: jobInput.value
  }
  editProfileApi(dataProfile)
    .then(() => {
      profileName.textContent = dataProfile.name;
      profileJob.textContent = dataProfile.about;
      closePopup(popupProfile);
    })
}

// общая функция для развещивания слушателей
export function setProfileListeners() {
  // кнопки сохранения popupProfile и CardMesto
  btnProfileSave.addEventListener("submit", formSubmitProfile);

  //добавляем слушатели для модального окна popupProfile
  btnPen.addEventListener("click", () => {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  });

  //добавляем слушатели для модального окна avatar
  btnAvatar.addEventListener("click", () => {
    openPopup(popupAvatar);
  });
}
