import { openPopup, closePopup, changeBtnLoading } from "../modules/modal";
import { getAllUser, changeProfile, changeAvatar } from "../modules/api";

const popupProfile = document.querySelector("#profile");
const btnProfileSave = document.querySelector("#profileForm");
const btnPen = document.querySelector(".profile__button-pen");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const profileEditForm = document.forms["profileForm"];
const nameInput = profileEditForm.elements.firstName;
const jobInput = profileEditForm.elements.profession;
const bntSavedProfile = btnProfileSave.querySelector(".form__button-save");

const popupAvatar = document.querySelector("#avatar");
const btnAvatarSave = document.querySelector("#avatarForm");
const avatarForm = document.forms["avatarForm"];
const avatarInput = avatarForm.elements.avatar;
const imgAvatar = document.querySelector(".profile__avatar");
const savedAvatar = btnAvatarSave.querySelector(".form__button-save");

export const user = { id: "" };
//информация с сервера про пользователя
getAllUser()
  .then((res) => {
    profileName.textContent = res.name;
    profileJob.textContent = res.about;
    imgAvatar.src = res.avatar;
    avatarInput.value = res.avatar;
    user.id = res._id;
    nameInput.value = res.name;
    jobInput.value = res.about;
    user.likes = res._likes;
  })
  .catch((err) => console.log(err));

//функция 'Submit profileForm'
function formSubmitProfile(event) {
  event.preventDefault();
  const dataProfile = {
    name: nameInput.value,
    about: jobInput.value,
  };
  changeBtnLoading(true, bntSavedProfile);
  changeProfile(dataProfile)
    .then(() => {
      profileName.textContent = dataProfile.name;
      profileJob.textContent = dataProfile.about;
      closePopup(popupProfile);
    })
    .catch((err) => console.log(err))
    .catch((err) => console.log(err))
    .finally(() => {
      changeBtnLoading(false, bntSavedProfile);
    });
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
}

//функция 'Submit Аватара'
function formSubmitAvatar(event) {
  event.preventDefault();
  const dataAvatar = {
    avatar: avatarInput.value,
  };
  changeBtnLoading(true, savedAvatar);
  changeAvatar(dataAvatar)
    .then((dataAvatar) => {
      imgAvatar.src = dataAvatar.avatar;
      closePopup(popupAvatar);
      avatarForm.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      changeBtnLoading(false, savedAvatar);
    });
}

export function setAvatarListeners() {
  // кнопка сохранения avatar
  btnAvatarSave.addEventListener("submit", formSubmitAvatar);

  //добавляем слушатели для модального окна avatar
  imgAvatar.addEventListener("click", () => {
    openPopup(popupAvatar);
  });
}
