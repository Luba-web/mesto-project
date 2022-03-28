import { openPhoto } from "../modules/imagePopup";
import { cardContainer } from "../utils/contstants";

//функция удаления карточки
function deleteCard(event) {
  const card = event.target.closest(".cards__item");
  card.remove();
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
    .addEventListener("click", deleteCard);
  imageCard.addEventListener("click", () => openPhoto(cardNew));
  return cardElement;
}

//функция клик лайка
function likeActive(event) {
  event.target.classList.toggle("cards__like_active");
}

//функция добавление карточек
export function addCard(cardNew) {
  cardContainer.prepend(renderCard(cardNew));
}
