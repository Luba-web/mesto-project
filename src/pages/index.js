import "./index.css";
import {
  setProfileListeners,
  setAvatarListeners,
} from "../modules/profilePopup";
import { setCardMestoListeners } from "../modules/cardMestoPopup";
import { enableValidation } from "../modules/validate";
import { config } from "../utils/contstants";
import { addCard } from "../modules/card";
import { getAllCards } from "../modules/api";

//добавление карточек
getAllCards().then((initialCards) => {
  initialCards.forEach((item) => {
    addCard(item);
  });
});

//профиль
setProfileListeners();
//автар
setAvatarListeners();
//карточки
setCardMestoListeners();
//валидация
enableValidation(config);
