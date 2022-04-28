import './index.css';
import {
  setAvatarListeners,
} from '../components/PopupWithForm';
import { setCardMestoListeners } from '../components/cardMestoPopup';
import FormValidator from '../components/FormValidator';
import { config } from '../utils/contstants';
import PopupWithForm from '../components/PopupWithForm';
import { api } from '../components/Api'
import { openPhoto } from '../components/imagePopup';
import Card from '../components/Card';
import { cardContainer } from '../utils/contstants';
// import Api from '../components/Api';

// export const api = new Api({
//   baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-8/',
//   headers: {
//     'authorization': 'cb8f559f-5b92-4512-9828-0e4dd400de93',
//     'Content-Type': 'application/json',
//   },
// })

//Валидация
const formsPopup = {};
function enableValidation(config) {
  const forms = document.querySelectorAll('.form');
  forms.forEach((form) => {
    formsPopup[form.name] = form.name;
    const formValidator = new FormValidator(config, form)
    formValidator.enableValidation();
  })
}

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');
const profileEditForm = document.forms['profileForm'];
const nameInput = profileEditForm.elements.name;
const jobInput = profileEditForm.elements.about;
const popupAvatar = document.querySelector('.popup-avatar');
const btnAvatarSave = document.querySelector('#avatarForm');
const avatarForm = document.forms['avatarForm'];
const avatarInput = avatarForm.elements.avatar;
const imgAvatar = document.querySelector('.profile__avatar');
const savedAvatar = btnAvatarSave.querySelector('.form__button-save');
const btnPen = document.querySelector('.profile__button-pen');

export const user = { id: '' };

export const popupTest = new PopupWithForm('.popup-profile', (data) => {
  //changeBtnLoading(true, bntSavedProfile);
  console.log('привет')
  // const dataProfile = {
  //   name: nameInput.value,
  //   about: jobInput.value,

  // };
  return api.changeProfile(data)
    .then((res) => {
      console.log('data', res)
      console.log('data.name', res.name)
      console.log('data.about', res.about)
      profileName.textContent = res.name;
      profileJob.textContent = res.about;
      console.log(profileName)
      console.log(profileJob)

    })
    .catch((err) => console.log(err))
    .finally(() => {
      console.log('finally')
      // changeBtnLoading(false, bntSavedProfile);
    });
});

popupTest.setEventListeners();
console.log();

enableValidation(config);

//профиль
btnPen.addEventListener('click', () => {
  // openPopup(popupProfile);
  popupTest.openPopup();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

//автар
setAvatarListeners();
//карточки
setCardMestoListeners();

//получение данных сервера
Promise.all([api.getAllCards(), api.getAllUser()])
  .then(([cards, userInfo]) => {
    profileName.textContent = userInfo.name;
    profileJob.textContent = userInfo.about;
    imgAvatar.src = userInfo.avatar;//
    avatarInput.value = userInfo.avatar;//
    user.id = userInfo._id;
    nameInput.value = userInfo.name;
    jobInput.value = userInfo.about;
    user.likes = userInfo._likes;
    cards.forEach((item) => {
      // addCard(item);
      const card1 = new Card(item, '#cardTemplate', openPhoto);

      cardContainer.prepend(card1.generate());

      //console.log('card1.generate', card1.aktiveLike());
    })
  })
  .catch((err) => console.log(err));