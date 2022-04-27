export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  //проверка на статус OK
  _onResponce(responce) {
    return responce.ok
      ? responce.json()
      : Promise.reject("Ошибка : " + responce);
  }

  //запрос профиля
  getAllUser() {
    return fetch(`${this._baseUrl}users/me`, { headers: this._headers }).then(
      this._onResponce

    );
  }

  //запрос на изменение Profile
  changeProfile(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._onResponce);
  }

  //запрос на изменение Avatar
  changeAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: data.avatar }),
    }).then(this._onResponce);
  }

  //запрос по карточкам на сервер
  getAllCards() {
    return fetch(`${this._baseUrl}cards`, { headers: this._headers }).then(
      this._onResponce
    );
  }

  //запрос на добавление карточек
  addCardServer(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._onResponce);
  }

  //запрос на удаление карточек
  removeCardServer(dataId) {
    return fetch(`${this._baseUrl}cards/${dataId._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._onResponce);
  }

  //запрос на изменение лайков на карточках
  addLikeServer(dataId) {
    return fetch(`${this._baseUrl}cards/likes/${dataId._id}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._onResponce);
  }

  removeLikeServer(dataId) {
    return fetch(`${this._baseUrl}cards/likes/${dataId._id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._onResponce);
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/plus-cohort-8/",
  headers: {
    "authorization": "cb8f559f-5b92-4512-9828-0e4dd400de93",
    "Content-Type": "application/json",
  },
})
api.getAllUser();