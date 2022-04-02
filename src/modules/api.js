import { configApi } from "../utils/contstants";
//проверка на статус OK
export const onResponce = (responce) => {
    return responce.ok ? responce.json() : Promise.reject('Ошибка : ' + responce);
  }

//запрос Profile 
export function getProfileApi() {
    return fetch(`${configApi.url}users/me`, {headers: configApi.headers})
      .then(onResponce)

}
//запрос на изменение Profile
export function editProfileApi(data) {
    return fetch(`${configApi.url}users/me`, {
        method: "PATCH",
        headers: configApi.headers,
        body: JSON.stringify({
            name: data.name,
            about: data.about
        })
    })
    .then(onResponce)
}

//запрос на изменение Avatar
export function editAvatar(data) {
    return fetch(`${configApi.url}users/me/avatar`, {
        method: "PATCH",
        headers: configApi.headers,
        body: JSON.stringify({
            avatar: data.avatar
        })
    })
    .then(onResponce)
}

//запрос по карточкам на сервер
export function getAllCards() {
    return fetch(`${configApi.url}cards`, {headers: configApi.headers})
      .then(onResponce)
}

//запрос на добавление карточек
export function addCardApi(data) {
    return fetch(`${configApi.url}cards`, {
        method: "POST",
        headers: configApi.headers,
        body: JSON.stringify(data)
    })
    .then(onResponce)
}

//запрос на удаление карточек
export function removeCardApi(dataId) {
    return fetch(`${configApi.url}cards/${dataId._id}`, {
        method: "DELETE",
        headers: configApi.headers
    })
    .then(onResponce)
}

//запрос на изменение лайков на карточках
export function editLikeCardApi(dataId) {
    return fetch(`${configApi.url}cards/likes/${dataId._id}`, {
        method: "PUT",
        headers: configApi.headers,
        body: JSON.stringify(data)
    })
    .then(onResponce)
}

export function deleteLikeCardApi(dataId) {
    return fetch(`${configApi.url}cards/likes/${dataId._id}`, {
        method: "DELETE",
        headers: configApi.headers
    })
    .then(onResponce)
}
