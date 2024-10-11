import { Link } from "react-router-dom";
import "../../assets/style/ui-styles/CardsPreview.scss";
import { UiCreditCards } from "./UiCreditCards";
export const UiCardsPreview = () => {
  return (
    <>
      <div id="cardsPreview">
        <div className="section">
          <h3>Kartlarım</h3>
          <Link to="/creditCards"> Tümünü Gör </Link>
        </div>
        <div className="cardList">
          <UiCreditCards  />
        </div>
      </div>
    </>
  );
};
