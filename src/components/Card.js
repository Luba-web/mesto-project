export default class Card {
  constructor(cardItem, selectorTemplate, { user }, { handleCardClick, handelDeleteCard, addLike, deleteLike }) {
    this._selector = selectorTemplate;
    this._cardItem = cardItem; //заменила cardNew
    this._cardTemlate = document.querySelector(this._selector);
    this._user = user;
    this._handleCardClick = handleCardClick;
    this._handelDeleteCard = handelDeleteCard;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
  }

  _getElement() {
    this._cardElement = this._cardTemlate.content
      .querySelector('.cards__item')
      .cloneNode(true);
    return this._cardElement;
  }

  //подсчет лайков
  _handleBtnLike(event) {
    if (this._aktiveLike()) {
      this._deleteLike(this._cardItem)
        .then((res) => {
          this._likeNumbers.textContent = res.likes.length;
          event.target.classList.remove('cards__like_active');
          this._cardItem.likes = res.likes;
        })
        .catch((err) => console.log(err));
    } else {
      this._addLike(this._cardItem)
        .then((res) => {
          this._likeNumbers.textContent = res.likes.length;
          event.target.classList.add('cards__like_active');
          this._cardItem.likes = res.likes;
        })
        .catch((err) => console.log(err));
    }
  }

  _aktiveLike() {
    return this._cardItem.likes.find((like) => like._id === this._user.id) ? true : false;
  }

  _setEventListeners() {
    //слушатель лайка
    this._btnLike.addEventListener('click', (event) => {
      this._handleBtnLike(event);
    });
    //слушатель на кнопку урны
    this._btnDelete.addEventListener('click', () => {
      //функция открытия модального окна и передача карты и елемета дома
      this._handelDeleteCard(this._cardItem, this._element);
    });
    //слушатель нажатия на картинку
    this._imageCard.addEventListener('click', () => {
      this._handleCardClick(this._cardItem); // нужно потом заменить на уневерсальное без аргумент
    });
  }

  generate() {
    this._element = this._getElement();

    this._imageCard = this._element.querySelector('.cards__images');
    this._nameCard = this._element.querySelector('.cards__text');
    this._btnDelete = this._element.querySelector('.cards__button-delete');
    this._likeNumbers = this._element.querySelector('.cards__like-numbers');
    this._btnLike = this._element.querySelector('.cards__like');

    this._setEventListeners();

    this._nameCard.textContent = this._cardItem.name;
    this._imageCard.src = this._cardItem.link;
    this._imageCard.alt = this._cardItem.name;
    this._likeNumbers.textContent = this._cardItem.likes.length;

    if (this._aktiveLike()) {
      this._btnLike.classList.add('cards__like_active');
    }

    if (this._cardItem.owner._id !== this._user.id) {
      this._btnDelete.style.display = 'none';
    }

    return this._element;
  }
}
