import './index.css';
import { btnImgAvatar, btnPen, btnCardMestoAdd, user, validateConfig, userConfig, inputConfig } from '../utils/contstants';
import Api from '../components/Api';
import FormValidator from '../components/FormValidator';
import PopupWithDelete from '../components/PopupWithDelete';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';
import Section from '../components/Section';

//Экземпляр класса api c токеном 
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-8/',
  headers: {
    'authorization': 'cb8f559f-5b92-4512-9828-0e4dd400de93',
    'Content-Type': 'application/json',
  },
})

//Валидация
const formsPopup = {};
function enableValidation(config) {
  const forms = document.querySelectorAll('.form');
  [...forms].forEach((form) => {

    // formsPopup[form.name] = form.name;
    const formValidity = new FormValidator(config, form)
    const name = form.getAttribute('name');
    formsPopup[name] = formValidity;
    // formsPopup[form.name] = formValidity - почему не сработала, не вывела имя profile?
    formValidity.enableValidation();
  })
}

const popupProfile = new PopupWithForm('.popup-profile', (data) => {
  return api.changeProfile(data)
    .then((res) => {
      userInfoData.setUserInfo(res)
    })
    .catch((err) => console.log(err))
});

const popupCardMesto = new PopupWithForm('.popup-cardMesto', (data) => {
  const cardData = {
    name: data.nameImg,
    link: data.linkImg,
  };
  return api.addCardServer(cardData)
    .then((res) => {
      cardSection.renderItems([res]);
    })
    .catch((err) => console.log(err))
})

const popupAvatar = new PopupWithForm('.popup-avatar', (data) => {
  const dataAvatar = {
    avatar: data.avatar,
  };
  return api.changeAvatar(dataAvatar)
    .then((res) => {
      userInfoData.setUserInfo(res)
    })
})

const popupPhoto = new PopupWithImage('.popup-images')

const popupDelete = new PopupWithDelete('.popup-delete', {
  handleSubmitDelete: (cardItem, element) => {
    return api.removeCardServer(cardItem)
      .then(() => {
        element.remove();
        element = '';
      })
  }
})

popupProfile.setEventListeners();

popupCardMesto.setEventListeners();

popupAvatar.setEventListeners();

popupPhoto.setEventListeners();

popupDelete.setEventListeners();

enableValidation(validateConfig);

//кнопки 
btnPen.addEventListener('click', () => {
  formsPopup['profileForm'].resetValidation();
  popupProfile.openPopup();
  userInfoData.getUserInfo(inputConfig);

});

btnCardMestoAdd.addEventListener('click', () => {
  formsPopup['cardMestoForm'].resetValidation();
  popupCardMesto.openPopup();

});

btnImgAvatar.addEventListener('click', () => {
  formsPopup['avatarForm'].resetValidation();
  popupAvatar.openPopup();

});

const userInfoData = new UserInfo(userConfig, () => {
  return api.getAllUser()

});

function renderer(item) {
  const card = new Card(item, '#cardTemplate', { user },
    {
      handleCardClick: (item) => {
        popupPhoto.openPopup(item);
      },

      handelDeleteCard: (cardItem, element) => {
        popupDelete.openPopup();
        popupDelete.getCard(cardItem, element);
      },

      addLike: (cardItem) => {
        return api.addLikeServer(cardItem)
      },
      deleteLike: (cardItem) => {
        return api.removeLikeServer(cardItem)
      },
    },
  );
  const cardElement = card.generate();

  return cardElement;
}

const cardSection = new Section(renderer, '.cards');

//получение данных сервера
Promise.all([api.getAllCards(), api.getAllUser()])
  .then(([cards, userInfo]) => {

    user.id = userInfo._id;

    userInfoData.setUserInfo(userInfo);

    cardSection.renderItems(cards);
  })

  .catch((err) => console.log(err));
