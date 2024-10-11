/* eslint-disable react/prop-types */
import CardIcon from "../../assets/images/CardIcon.png";
import { Link } from "react-router-dom";

export const UiCardListDetailItem = ({ cardList }) => {
  return (
    <>
      {cardList
        ? cardList.map((card,index) => {
            return (
              <div className="cardItem" key={index}>
                <img src={CardIcon} alt="" />
                <div className="cardName">
                  <h4>Kart Adı</h4>
                  <p>{card.cardName}</p>
                </div>
                <div className="cardType">
                  <h4>Kart Tipi</h4>
                  <p>{card.cardType}</p>
                </div>
                <div className="bankDetail">
                  <h4>Banka</h4>
                  <p>{card.bankName}</p>
                </div>
                <div className="cardNumber">
                  <h4>Kart Numarası</h4>
                  <p>{card.cardNumber}</p>
                </div>
                <div className="cardOwner">
                  <h4>Kart Sahibi</h4>
                  <p>{card.cardOwner}</p>
                </div>
                <div className="buttons">
                  <Link to={`cardExpenses/${card.id}`}>Detaylar</Link>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};
