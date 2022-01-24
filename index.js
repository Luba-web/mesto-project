//находим переменные для модального окна
const popupProfile = document.querySelector("#profile");
const btnProfileClose = document.querySelector("#profileClose");
const btnPen = document.querySelector(".profile__button-pen");
const btnProfileSave = document.querySelector("#profileSave");

//функция открытия и закрытие модального окна
function popupOpen(popup) {
  popup.classList.add("popup_opened");
}
function popupClose(popup) {
  popup.classList.remove("popup_opened");
}

// вызов метода открытия и закрытия модального окна popupProfile
btnPen.addEventListener("click", () => {
  popupOpen(popupProfile);
});
btnProfileClose.addEventListener("click", () => {
  popupClose(popupProfile);
});

// Находим форму в DOM
const formElement = document.querySelector(".Form");

function handleFormSubmit(event) {
  event.preventDefault()
  let nameInput = formElement.querySelector(".form__input_name_first-name");
  let jobInput = formElement.querySelector(".form__input_name_profession");
  let profileName = document.querySelector(".profile__title");
  let profileJob = document.querySelector(".profile__subtitle");
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

// кнопка сохранения popupProfile
btnProfileSave.addEventListener('click', () => {
  formElement.addEventListener('submit', handleFormSubmit);
  popupClose(popupProfile);
});


// контейнер с картами
const popupCardMesto = document.querySelector("#cardMesto");
const btnCardMestoClose = document.querySelector("#cardMestoClose");
const btnCardMestoAdd = document.querySelector("#profileAdd");
const btnCardMestoSave = document.querySelector("#cardMestoSave");

btnCardMestoAdd.addEventListener("click", () => {
  popupOpen(popupCardMesto);
}, false);
btnProfileClose.addEventListener("click", () => {
  popupClose(popupCardMesto);
});
btnCardMestoSave.addEventListener('click', () => {
  popupClose(popupCardMesto);
});
