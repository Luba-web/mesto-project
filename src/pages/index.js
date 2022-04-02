import "./index.css";
import { setProfileListeners } from "../modules/profilePopup";
import { setCardMestoListeners } from "../modules/cardMestoPopup";
import { enableValidation } from "../modules/validate";
import { config } from "../utils/contstants";
import { addCard } from "../modules/card";
import { getAllCards, getProfileApi, editAvatar } from "../modules/api";


//добавление карточек
getAllCards()
  .then((initialCards) => {
    initialCards.forEach((item) => {
        addCard(item)
    })
  })

getProfileApi()
  .then(() => {
    setProfileListeners(); 
})

setCardMestoListeners();
enableValidation(config);



