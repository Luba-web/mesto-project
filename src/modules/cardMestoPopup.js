import { openPopup, closePopup, changeBtnLoading } from "../modules/modal";
import { addCard } from "../modules/card";
import { addCardServer } from "../modules/api";

const popupCardMesto = document.querySelector("#cardMesto");
const cardEditMestoForm = document.forms["cardMestoForm"];
const nameInputCard = cardEditMestoForm.elements.nameImg;
const linkInputCard = cardEditMestoForm.elements.linkImg;
const btnCardMestoAdd = document.querySelector("#profileAdd");
const btnCardMestoSave = document.querySelector("#cardMestoForm");
const bntSaved = cardEditMestoForm.querySelector(".form__button-save");

//функция 'Submit cardMestoForm'
export function submitFormCard(event) {
  event.preventDefault();
  const cardData = {
    name: nameInputCard.value,
    link: linkInputCard.value,
  };
  changeBtnLoading(true, bntSaved);
  addCardServer(cardData)
    .then((cardData) => {
      addCard(cardData);
      closePopup(popupCardMesto);
      cardEditMestoForm.reset();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      changeBtnLoading(false, bntSaved);
    });
}

// общая функция для развещивания слушателей
export function setCardMestoListeners() {
  // кнопки сохранения CardMesto
  btnCardMestoSave.addEventListener("submit", submitFormCard);

  //добавляем слушатели для модального окна popupCardMesto
  btnCardMestoAdd.addEventListener("click", () => {
    openPopup(popupCardMesto);
  });
}
