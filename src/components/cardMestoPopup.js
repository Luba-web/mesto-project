import { openPopup, closePopup, changeBtnLoading } from './modal';
//import { addCard } from './Card';
import { config } from '../utils/contstants';
import { toggleButtonState } from './FormValidator';
import { api } from './Api';
import Card from './Card';
import { cardContainer } from '../utils/contstants';

const popupCardMesto = document.querySelector('#cardMesto');
const cardEditMestoForm = document.forms['cardMestoForm'];
const nameInputCard = cardEditMestoForm.elements.nameImg;
const linkInputCard = cardEditMestoForm.elements.linkImg;
const btnCardMestoAdd = document.querySelector('#profileAdd');
const btnCardMestoSave = document.querySelector('#cardMestoForm');
const bntSaved = cardEditMestoForm.querySelector('.form__button-save');

//функция 'Submit cardMestoForm'
export function submitFormCard(event) {
  event.preventDefault();
  const cardData = {
    name: nameInputCard.value,
    link: linkInputCard.value,
  };
  changeBtnLoading(true, bntSaved);
  api.addCardServer(cardData)
    .then((item) => {
      const card1 = new Card(item, '#cardTemplate', openPhoto);//section уйдет, пока это костылики
      cardContainer.prepend(card1.generate());//section уйдет, пока это костылики

      closePopup(popupCardMesto);
      cardEditMestoForm.reset();
      // toggleButtonState(bntSaved, false, config);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      changeBtnLoading(false, bntSaved);
    });
}

// общая функция для развещивания слушателей
export function setCardMestoListeners() {
  // кнопки сохранения CardMesto
  btnCardMestoSave.addEventListener('submit', submitFormCard);

  //добавляем слушатели для модального окна popupCardMesto
  btnCardMestoAdd.addEventListener('click', () => {
    openPopup(popupCardMesto);
  });
}
