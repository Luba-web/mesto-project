import { openPopup, closePopup } from "../modules/modal";
import { addCard } from "../modules/card";

const popupCardMesto = document.querySelector("#cardMesto");
const cardEditMestoForm = document.forms["cardMestoForm"];
const nameInputCard = cardEditMestoForm.elements.nameImg;
const linkInputCard = cardEditMestoForm.elements.linkImg;
const btnCardMestoAdd = document.querySelector("#profileAdd");
const btnCardMestoSave = document.querySelector("#cardMestoForm");

//функция 'Submit cardMestoForm'
export function formSubmitCard(event) {
  const cardData = {
    name: nameInputCard.value,
    link: linkInputCard.value,
  };
  event.preventDefault();
  addCard(cardData);
  closePopup(popupCardMesto);
  cardEditMestoForm.reset();
}

// общая функция для развещивания слушателей
export function setCardMestoListeners() {
  // кнопки сохранения CardMesto
  btnCardMestoSave.addEventListener("submit", formSubmitCard);

  //добавляем слушатели для модального окна popupCardMesto
  btnCardMestoAdd.addEventListener("click", () => {
    openPopup(popupCardMesto);
  });
}
