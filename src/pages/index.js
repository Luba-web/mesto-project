import "./index.css";
import {
  setProfileListeners,
  setAvatarListeners,
  profileEditForm,
} from "../components/profilePopup";
import { setCardMestoListeners } from "../components/cardMestoPopup";
import FormValidator from "../components/FormValidator";
import { config } from "../utils/contstants";


//import Api from "../modules/api";

// export const api = new Api ({
//   baseUrl: "https://mesto.nomoreparties.co/v1/plus-cohort-8/",
//   headers: {
//     "authorization": "cb8f559f-5b92-4512-9828-0e4dd400de93",
//     "Content-Type": "application/json",
//   },
// })
// api.getAllUser();

//Валидация
const formsPopup = {};
function enableValidation(config) {
  const forms = document.querySelectorAll(".form");
  forms.forEach((form) => {
    formsPopup[form.name] = form.name;
    const formValidator = new FormValidator(config, form)
    formValidator.enableValidation();
  })
}

enableValidation(config);

//профиль
setProfileListeners();
//автар
setAvatarListeners();
//карточки
setCardMestoListeners();
//валидация
//enableValidation(config);
