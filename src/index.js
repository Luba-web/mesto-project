import "../pages/index.css";
import { initialCards } from "./utils/contstants";
import { popupProfile, popupCardMesto, popupImages, btnPen, btnProfileSave,
  btnCardMestoAdd, btnCardMestoSave, initialCards } from "./utils/contstants";
import { profileName, profileJob, popupPhoto, cardContainer, cardTemlate } from "./utils/contstants";
import { profileEditForm, nameInput, jobInput, cardEditMestoForm, nameInputCard, linkInputCard } from "./utils/contstants";

//функция открытие модального окна и закрытия на esc
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      popup.classList.remove("popup_opened");
    }
  });
}

//функция закрытие модального окна
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//функция 'Submit profileForm'
function formSubmitProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

//функция 'Submit cardMestoForm'
function formSubmitCard(event) {
  event.preventDefault();
  const cardData = {
    name: nameInputCard.value,
    link: linkInputCard.value,
  };
  addCard(cardData);
  closePopup(popupCardMesto);
  cardEditMestoForm.reset();
}

//функция добавление карточек
function addCard(cardNew) {
  const cardElement = renderCard(cardNew);
  cardContainer.prepend(cardElement);
}

//функция удаления карточки
function deleteCard(event) {
  const card = event.target.closest(".cards__item");
  card.remove();
}

//функция добавления карточек пользователем
function renderCard(cardNew) {
  const cardElement = cardTemlate.querySelector(".cards__item").cloneNode(true);
  const imageCard = cardElement.querySelector(".cards__images");
  const nameCard = cardElement.querySelector(".cards__text");
  nameCard.textContent = cardNew.name;
  imageCard.src = cardNew.link;
  imageCard.alt = cardNew.name;
  cardElement
    .querySelector(".cards__like")
    .addEventListener("click", likeActive);
  cardElement
    .querySelector(".cards__button-delete")
    .addEventListener("click", deleteCard);
  imageCard.addEventListener("click", () => openPhoto(cardNew));
  return cardElement;
}

//функция открытия картинки/фото
function openPhoto(cardNew) {
  popupImages.querySelector(".popup__images").src = cardNew.link;
  popupImages.querySelector(".popup__images").alt = cardNew.name;
  popupImages.querySelector(".popup__caption").textContent = cardNew.name;
  openPopup(popupImages);
};

//функция клик лайка
function likeActive(event) {
  event.target.classList.toggle("cards__like_active");
}



//обрабочики событий(слушатели)

//слушатели для закрытия модальных окон на область или крестик
popupProfile.addEventListener("click", (evt) => {
  if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')){
    closePopup(popupProfile);
  }
});

popupCardMesto.addEventListener("click", (evt) => {
  if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')){
    closePopup(popupCardMesto);
  }
});

popupImages.addEventListener("click", (evt) => {
  if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__button-close')){
    closePopup(popupImages);
  }
});


// кнопки сохранения popupProfile и CardMesto
btnProfileSave.addEventListener("submit", formSubmitProfile);
btnCardMestoSave.addEventListener("submit", formSubmitCard);

//добавляем слушатели для модального окна popupProfile
btnPen.addEventListener("click", () => {
  openPopup(popupProfile);
});

//добавляем слушатели для модального окна popupCardMesto
btnCardMestoAdd.addEventListener("click", () => {
  openPopup(popupCardMesto);
});

//добавление карточек
initialCards.forEach((item) => {
  addCard(item);
});

