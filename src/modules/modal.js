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
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    closePopup(activePopup);
  }
}

//функция закрытие крестик или по клику на оверлей
const handleOverlayAndCloseClick = (event) => {
  const popup = event.target.closest('.popup');
  if (
    event.target.classList.contains("popup") ||
    event.target.classList.contains("popup__button-close")
  ) {
    closePopup(popup);
  }
}

//функция изменения текста кнопки
export const changeBtnLoading = (isLoading, bntSaved) => {
  if (isLoading) {
    bntSaved.textContent = "Сохранение..";
  } else {
    bntSaved.textContent = "Сохранить"
  }
}
