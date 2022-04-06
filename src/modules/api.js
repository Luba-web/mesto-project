//api
// Токен: cb8f559f-5b92-4512-9828-0e4dd400de93
// Идентификатор группы: plus-cohort-8
const configApi = {
  url: "https://mesto.nomoreparties.co/v1/plus-cohort-8/",
  headers: {
    "authorization": "cb8f559f-5b92-4512-9828-0e4dd400de93",
    "Content-Type": "application/json",
  },
}

//проверка на статус OK
export const onResponce = (responce) => {
  return responce.ok ? responce.json() : Promise.reject("Ошибка : " + responce);
}

//запрос профиля
export function getAllUser() {
  return fetch(`${configApi.url}users/me`, { headers: configApi.headers })
  .then(onResponce);
}

//запрос на изменение Profile
export function changeProfile(data) {
  return fetch(`${configApi.url}users/me`, {
    method: "PATCH",
    headers: configApi.headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
  }).then(onResponce);
}

//запрос на изменение Avatar
export function changeAvatar(data) {
  return fetch(`${configApi.url}users/me/avatar`, {
    method: "PATCH",
    headers: configApi.headers,
    body: JSON.stringify({ avatar: data.avatar }),
  }).then(onResponce);
}

//запрос по карточкам на сервер
export function getAllCards() {
  return fetch(`${configApi.url}cards`, { headers: configApi.headers })
  .then(onResponce);
}

//запрос на добавление карточек
export function addCardServer(data) {
  return fetch(`${configApi.url}cards`, {
    method: "POST",
    headers: configApi.headers,
    body: JSON.stringify(data),
  }).then(onResponce);
}

//запрос на удаление карточек
export function removeCardServer(dataId) {
  return fetch(`${configApi.url}cards/${dataId._id}`, {
    method: "DELETE",
    headers: configApi.headers,
  }).then(onResponce);
}

//запрос на изменение лайков на карточках
export function addLikeServer(dataId) {
  return fetch(`${configApi.url}cards/likes/${dataId._id}`, {
    method: "PUT",
    headers: configApi.headers,
  }).then(onResponce);
}

export function removeLikeServer(dataId) {
  return fetch(`${configApi.url}cards/likes/${dataId._id}`, {
    method: "DELETE",
    headers: configApi.headers,
  }).then(onResponce);
}
