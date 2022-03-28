import { openPopup, closePopup } from "../modules/modal";

const popupImages = document.querySelector("#popupImages");

//функция открытия картинки/фото
export function openPhoto(cardNew) {
  popupImages.querySelector(".popup__images").src = cardNew.link;
  popupImages.querySelector(".popup__images").alt = cardNew.name;
  popupImages.querySelector(".popup__caption").textContent = cardNew.name;
  openPopup(popupImages);
}

export function setImagePopupListeners() {
//слушатели для закрытия модальных окон на область или крестик
popupImages.addEventListener("click", (evt) => {
  if (
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__button-close")
  ) {
    closePopup(popupImages);
  }
});
}
