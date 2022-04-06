import "./index.css";
import {
  setProfileListeners,
  setAvatarListeners,
} from "../modules/profilePopup";
import { setCardMestoListeners } from "../modules/cardMestoPopup";
import { enableValidation } from "../modules/validate";
import { config } from "../utils/contstants";

//профиль
setProfileListeners();
//автар
setAvatarListeners();
//карточки
setCardMestoListeners();
//валидация
enableValidation(config);
