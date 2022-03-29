import { openPopup } from "../modules/modal";

const popupImages = document.querySelector("#popupImages");
const popupPhoto = document.querySelector(".popup__images");

//функция открытия картинки/фото
export function openPhoto(cardNew) {
  popupPhoto.src = cardNew.link;
  popupPhoto.alt = cardNew.name;
  popupImages.querySelector(".popup__caption").textContent = cardNew.name;
  openPopup(popupImages);
}
