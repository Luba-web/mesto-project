const page = document.querySelector(".page");

//функция открытие модального окна и закрытия на esc
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  page.addEventListener("keydown", handleEsс);
  page.addEventListener("click", handleOverlayAndCloseClick);
}

//функция закрытие модального окна
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  page.removeEventListener("keydown", handleEsс);
  page.removeEventListener("click", handleOverlayAndCloseClick);
}

//функция закрытие на ECS
const handleEsс = (event) => {
  const activePopup = document.querySelector(".popup_opened");
  if (event.key === "Escape") {
   closePopup(activePopup);
  }
}

//функция закрытие крестик или по клику на оверлей
const handleOverlayAndCloseClick = (event) => {
  const activePopup = document.querySelector(".popup_opened");
  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__button-close")
  ) {
    closePopup(activePopup);
  }
}
