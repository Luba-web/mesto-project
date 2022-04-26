import { api } from "./Api";
import { user } from "./profilePopup";
import { cardContainer } from "../utils/contstants";

// //функция удаления карточки
function deleteCard(event, cardNew) {
  api
    .removeCardServer(cardNew)
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
    api
      .removeLikeServer(cardNew)
      .then((res) => {
        likeNumbersElement.textContent = res.likes.length;
        event.target.classList.remove("cards__like_active");
        cardNew.likes = res.likes;
      })
      .catch((err) => console.log(err));
  } else {
    api
      .addLikeServer(cardNew)
      .then((res) => {
        likeNumbersElement.textContent = res.likes.length;
        event.target.classList.add("cards__like_active");
        cardNew.likes = res.likes;
      })
      .catch((err) => console.log(err));
  }
}

// функция добавление карточек
export function addCard(cardNew) {
  // перееедет в setion
  api
    .getAllCards()
    .then(() => {
      cardContainer.prepend(renderCard(cardNew));
    })
    .catch((err) => console.log(err));
}

// function aktiveLike(cardNew) {
//   return cardNew.likes.find((like) => like._id === user.id) ? true : false;
// }

export default class Card {
  constructor(cardItem, selectorTemplate, openPhoto) {
    this._selector = selectorTemplate;
    this._cardItem = cardItem; //заменила cardNew
    this._cardTemlate = document.querySelector(this._selector);
    this._openPhoto = openPhoto;
  }

  _getElement() {
    this._cardElement = this._cardTemlate.content
      .querySelector(".cards__item")
      .cloneNode(true);
    return this._cardElement;
  }

  //удаления карточки
  _deleteCard(event) {
    api
      .removeCardServer(this._cardItem)
      .then(() => {
        event.target.closest(".cards__item").remove();
      })
      .catch((err) => console.log(err));
  }

  //подсчет лайков
  _handleBtnLike(event) {
    if (this._aktiveLike()) {
      api
        .removeLikeServer(this._cardItem)
        .then((res) => {
          this._likeNumbers.textContent = res.likes.length;
          event.target.classList.remove("cards__like_active");
          this._cardItem.likes = res.likes;
        })
        .catch((err) => console.log(err));
    } else {
      api
        .addLikeServer(this._cardItem)
        .then((res) => {
          this._likeNumbers.textContent = res.likes.length;
          event.target.classList.add("cards__like_active");
          this._cardItem.likes = res.likes;
        })
        .catch((err) => console.log(err));
    }
  }
  
  _aktiveLike() {
    return this._cardItem.likes.find((like) => like._id === user.id) ? true : false;
  }

  _setEventListeners() {
    //слушатель лайка
    this._btnLike.addEventListener("click", (event) => {
      this._handleBtnLike(event);
    });
    //слушатель на кнопку урны
    this._btnDelete.addEventListener("click", (event) => {
      this._deleteCard(event);
    });
    //слушатель нажатия на картинку
    this._imageCard.addEventListener("click", () => {
      this._openPhoto(this._cardItem); // нужно потом заменить на уневерсальное без аргумент
    });
  }

  generate() {
    this._element = this._getElement();

    this._imageCard = this._element.querySelector(".cards__images");
    this._nameCard = this._element.querySelector(".cards__text");
    this._btnDelete = this._element.querySelector(".cards__button-delete");
    this._likeNumbers = this._element.querySelector(".cards__like-numbers");
    this._btnLike = this._element.querySelector(".cards__like");

    this._setEventListeners();

    this._nameCard.textContent = this._cardItem.name;
    this._imageCard.src = this._cardItem.link;
    this._imageCard.alt = this._cardItem.name;
    this._likeNumbers.textContent = this._cardItem.likes.length;

    
    
    if (this._aktiveLike()) {
      this._btnLike.classList.add("cards__like_active");
    }

    if (this._cardItem.owner._id !== user.id) {
      this._btnDelete.style.display = "none";
    }

    
    return this._element;
  }
}
