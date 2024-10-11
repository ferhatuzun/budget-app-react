/* eslint-disable react/prop-types */
import "../../assets/style/ui-styles/MyCards.scss";
import MastercardLogo from "../../assets/images/Mastercard.png";
import ChipCard from "../../assets/images/Chip_Card.png";
import { UiNoData } from "./UiNoData";

export const UiMyCards = ({ cardList }) => {
  return (
    <>
      {cardList != "" ? (
        cardList.map((card, index) => {
          return (
            <div id="creditCardsContainer" key={index}>
              <div className="cardTop">
                <div>
                  <p>Bakiye</p>
                  <h4>{card.balance} ₺</h4>
                </div>
                <img src={ChipCard} alt="" />
              </div>
              <div className="cardBody">
                <div>
                  <p className="title">Kart Sahibi</p>
                  <p>{card.cardOwner}</p>
                </div>
                <div>
                  <p className="title">Son Kullanma Tarihi</p>
                  <p>{card.expirationDate}</p>
                </div>
              </div>
              <div className="cardFooter">
                <p>{card.cardNumber}</p>
                <img src={MastercardLogo} alt="" />
              </div>
            </div>
          );
        })
      ) : (
        <UiNoData />
      )}
    </>
  );
};
