import { openPopup, closePopup, changeBtnLoading } from "../modules/modal";
import { getAllCards, getAllUser, changeProfile, changeAvatar } from "../modules/api";
import { addCard } from "../modules/card";

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
//добавление карточек и информации пользователя

Promise.all([getAllCards(), getAllUser()])
.then(([cards, userInfo]) => {
    profileName.textContent = userInfo.name;
    profileJob.textContent = userInfo.about;
    imgAvatar.src = userInfo.avatar;
    avatarInput.value = userInfo.avatar;
    user.id = userInfo._id;
    nameInput.value = userInfo.name;
    jobInput.value = userInfo.about;
    user.likes = userInfo._likes;
    cards.forEach((item) => {
      addCard(item);
    })
  })
  .catch((err) => console.log(err));

//функция 'Submit profileForm'
function submitFormProfile(event) {
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
    .finally(() => {
      changeBtnLoading(false, bntSavedProfile);
    });
}

// общая функция для развещивания слушателей
export function setProfileListeners() {
  // кнопки сохранения popupProfile и CardMesto
  btnProfileSave.addEventListener("submit", submitFormProfile);

  //добавляем слушатели для модального окна popupProfile
  btnPen.addEventListener("click", () => {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
  });
}

//функция 'Submit Аватара'
function submitFormAvatar(event) {
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
  btnAvatarSave.addEventListener("submit", submitFormAvatar);

  //добавляем слушатели для модального окна avatar
  imgAvatar.addEventListener("click", () => {
    openPopup(popupAvatar);
  });
}
