const page = document.querySelector(".page");

//функция открытие модального окна и закрытия на esc
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  page.addEventListener("keydown", handleEsс);
  page.addEventListener("click", handleEsс);
}

//функция закрытие модального окна
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  page.removeEventListener("keydown", handleEsс);
  page.removeEventListener("click", handleEsс);
}

//функция закрытие на ECS или крестик или по клику на оверлей
const handleEsс = (event) => {
  const activePopup = document.querySelector(".popup_opened");
  if (event.key === "Escape") {
   closePopup(activePopup);
  }
  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__button-close")
  ) {
    closePopup(activePopup);
  }
}
