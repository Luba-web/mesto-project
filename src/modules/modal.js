const page = document.querySelector(".page");

//функция открытие модального окна и закрытия на esc
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  page.addEventListener("keydown", handleEsс);
}

//функция закрытие модального окна
export function closePopup(popup) {
  page.removeEventListener("keydown", handleEsс);
  popup.classList.remove("popup_opened");
}

const handleEsс = (event) => {
  const activePopup = document.querySelector(".popup_opened");
  if (event.key === "Escape") {
    closePopup(activePopup);
  }
};
