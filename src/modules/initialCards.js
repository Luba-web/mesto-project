import { addCard } from "../modules/card";
// картинки для карточек
import masyImage from "../images/1.jpg";
import susyImage from "../images/2.jpg";
import vasyImage from "../images/3.jpg";
import lasyImage from "../images/4.jpg";
import osyImage from "../images/5.jpg";
import bosyImage from "../images/6.jpg";

const initialCards = [
  {
    name: "Мася",
    link: masyImage,
  },
  {
    name: "Суся",
    link: susyImage,
  },
  {
    name: "Вася",
    link: vasyImage,
  },
  {
    name: "Ляся",
    link: lasyImage,
  },
  {
    name: "Ося",
    link: osyImage,
  },
  {
    name: "Мистер Бося Старший",
    link: bosyImage,
  },
];

//добавление карточек

export function drawInitialCards() {
  initialCards.forEach((item) => {
    addCard(item);
  });
}
