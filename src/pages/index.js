import "./index.css";
import {
  setProfileListeners,
  setAvatarListeners,
} from "../modules/profilePopup";
import { setCardMestoListeners } from "../modules/cardMestoPopup";
import { enableValidation } from "../modules/validate";
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
//профиль
setProfileListeners();
//автар
setAvatarListeners();
//карточки
setCardMestoListeners();
//валидация
enableValidation(config);
