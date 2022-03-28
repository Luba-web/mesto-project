import "./index.css";
import { drawInitialCards } from "../modules/initialCards";
import { setProfileListeners } from "../modules/profilePopup";
import { setCardMestoListeners } from "../modules/cardMestoPopup";
import { setImagePopupListeners } from "../modules/imagePopup";
import { enableValidation } from "../modules/validate";
import { config } from "../utils/contstants";

drawInitialCards();
setProfileListeners();
setCardMestoListeners();
enableValidation(config);
