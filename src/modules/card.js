import { openPhoto } from "../modules/imagePopup";
import { cardContainer } from "../utils/contstants";
import { user } from "../modules/profilePopup";
import {
  getAllCards,
  removeCardServer,
  addLikeServer,
  removeLikeServer,
} from "../modules/api";

//функция удаления карточки
function deleteCard(event, cardNew) {
  removeCardServer(cardNew)
    // .then((res) => {
    //   return res;
    // })
    .then(() => {
      event.target.closest(".cards__item").remove();
    })
    .catch((err) => console.log(err));
}

//функция добавления карточек пользователем
function renderCard(cardNew) {
  const cardTemlate = document.querySelector("#cardTemplate").content;
  const cardElement = cardTemlate.querySelector(".cards__item").cloneNode(true);
  const imageCard = cardElement.querySelector(".cards__images");
  const nameCard = cardElement.querySelector(".cards__text");
  const btnDelete = cardElement.querySelector(".cards__button-delete");
  const likeNumbers = cardElement.querySelector(".cards__like-numbers");
  const btnLike = cardElement.querySelector(".cards__like");
  nameCard.textContent = cardNew.name;
  imageCard.src = cardNew.link;
  imageCard.alt = cardNew.name;
  likeNumbers.textContent = cardNew.likes.length;

  if (aktiveLike(cardNew)) {
    btnLike.classList.add("cards__like_active");
  }

  if (cardNew.owner._id !== user.id) {
    btnDelete.style.display = "none";
  }

  //слушатель лайка
  btnLike.addEventListener("click", (event) => {
    handleBtnLike(event, likeNumbers, cardNew);
  });
  //слушатель на кнопку урны
  btnDelete.addEventListener("click", (event) => {
    deleteCard(event, cardNew);
  });
  //слушатель нажатия на картинку
  imageCard.addEventListener("click", () => {
    openPhoto(cardNew);
  });

  return cardElement;
}
//функция активности значка лайка
function aktiveLike(cardNew) {
  return cardNew.likes.find((like) => like._id === user.id) ? true : false;
}

//функция подсчета лайков
function handleBtnLike(event, likeNumbersElement, cardNew) {
  if (aktiveLike(cardNew)) {
    removeLikeServer(cardNew)
      .then((res) => {
        likeNumbersElement.textContent = res.likes.length;
        event.target.classList.remove("cards__like_active");
        cardNew.likes = res.likes;
      })
      .catch((err) => console.log(err));
  } else {
    addLikeServer(cardNew)
      .then((res) => {
        likeNumbersElement.textContent = res.likes.length;
        event.target.classList.add("cards__like_active");
        cardNew.likes = res.likes;
      })
      .catch((err) => console.log(err));
  }
}

//функция добавление карточек
export function addCard(cardNew) {
  getAllCards()
    .then(() => {
      cardContainer.prepend(renderCard(cardNew));
    })
    .catch((err) => console.log(err));
}
