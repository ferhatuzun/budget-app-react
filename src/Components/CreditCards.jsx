import { UiMyCards } from "./Ui/UiMyCards";
import "../assets/style/CreditCards.scss";
import { UiCardListDetail } from "./Ui/UiCardListDetail";
import { UiAddNewCard } from "./Ui/UiAddNewCard";
import BankContext from "../Context/BankContext";
import { useContext } from "react";
export const CreditCards = () => {
  const {cardList} = useContext(BankContext)
  return (
    <>
      <div id="myCardsContainer">
        <div className="section">
          <h3>Kartlarım</h3>
        </div>
        <div className="cardListContainer">
          <div className="card">
            <UiMyCards cardList={cardList} />
          </div>
        </div>
        <UiCardListDetail />
        <UiAddNewCard />
      </div>
    </>
  );
};
