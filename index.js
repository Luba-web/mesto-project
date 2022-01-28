//находим переменные
const popupProfile = document.querySelector("#profile");
const popupCardMesto = document.querySelector("#cardMesto");
const popupImages = document.querySelector("#popupImages");

const profileEditForm = document.forms["profileForm"];
const nameInput = profileEditForm.elements.firstName;
const jobInput = profileEditForm.elements.profession;

const cardEditMestoForm = document.forms["cardMestoForm"];
const nameInputCard = cardEditMestoForm.elements.nameImg;
const linkInputCard = cardEditMestoForm.elements.linkImg;

const btnPen = document.querySelector(".profile__button-pen");
const btnProfileSave = document.querySelector("#profileForm");
const closePopupBtns = document.querySelectorAll(".popup__button-close");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const btnCardMestoAdd = document.querySelector("#profileAdd");
const btnCardMestoSave = document.querySelector("#cardMestoForm");

const cardContainer = document.querySelector(".cards");
const cardTemlate = document.querySelector("#cardTemplate").content;

const popupPhoto = document.querySelector("#photoMesto");
const initialCards = [
  {
    name: "Мася",
    link: "./images/1.jpg",
  },
  {
    name: "Суся",
    link: "./images/2.jpg",
  },
  {
    name: "Вася",
    link: "./images/3.jpg",
  },
  {
    name: "Ляся",
    link: "./images/4.jpg",
  },
  {
    name: "Ося",
    link: "./images/5.jpg",
  },
  {
    name: "Мистер Бося Старший",
    link: "./images/6.jpg",
  },
];

//функция открытие модального окна
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//функция закрытие модального окна
function closePopup() {
  const openPopup = document.querySelector(".popup_opened");
  openPopup.classList.remove("popup_opened");
}

//функция 'Submit profileForm'
function formSubmitProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

//функция 'Submit cardMestoForm'
function formSubmitCard(event) {
  event.preventDefault();
  const data = {};
  data.name = nameInputCard.value;
  data.link = linkInputCard.value;
  addCard(data);
  closePopup();
  nameInputCard.value = "";
  linkInputCard.value = "";
}

//функция добавление карточек
function addCard(cardNew) {
  const cardElement = renderCard(cardNew); //вопрос
  cardContainer.prepend(cardElement);
}

//функция удаления карточки
function deleteCard(event) {
  console.log(event);
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
const openPhoto = (cardNew) => {
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

//слушатель для всех кнопок закрытия
closePopupBtns.forEach((item) => {
  item.addEventListener("click", closePopup);
});

// кнопки сохранения popupProfile и CardMesto
btnProfileSave.addEventListener("submit", formSubmitProfile);
btnCardMestoSave.addEventListener("submit", formSubmitCard);

//добовляем слушатели для модального окна popupProfile
btnPen.addEventListener("click", () => {
  openPopup(popupProfile);
});

//добовляем слушатели для модального окна popupCardMesto
btnCardMestoAdd.addEventListener("click", () => {
  openPopup(popupCardMesto);
});

//добовление карточек
for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i]);
}
