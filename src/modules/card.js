import { openPhoto } from "../modules/imagePopup";
import { cardContainer } from "../utils/contstants";
import { addCardApi, removeCardApi, editLikeCardApi, deleteLikeCardApi } from "../modules/api";

//функция удаления карточки
function deleteCard(event, cardNew) {
  removeCardApi(cardNew)
    .then(() => {
      event.target.closest(".cards__item").remove();
    })
}

//функция добавления карточек пользователем
function renderCard(cardNew) {
  const cardTemlate = document.querySelector("#cardTemplate").content;
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
    .addEventListener("click", (event) => {
      deleteCard(event, cardNew);
    })
  imageCard.addEventListener("click", () => openPhoto(cardNew));
  return cardElement;
}

//функция клик лайка
function likeActive(event) {
  event.target.classList.toggle("cards__like_active");
}

//функция добавление карточек
export function addCard(cardNew) {
  addCardApi(cardNew)
  .then((cardNew) => {
    cardContainer.prepend(renderCard(cardNew));
  })
}
