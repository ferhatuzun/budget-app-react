import "../../assets/style/ui-styles/creditCard.scss";
import MastercardLogo from "../../assets/images/Mastercard.png";
import ChipCard from "../../assets/images/Chip_Card.png";
import BankContext from "../../Context/BankContext";
import { useContext } from "react";
export const UiCreditCards = () => {
  const { cardList } = useContext(BankContext);
  const newCardList=[];
  for (let i = 0; i < 5; i++) {
    newCardList.push(cardList[i])
  }
  return (
    <>
    {newCardList.map((card,index)=>{
      return (
      <div id="creditCardContainer" key={index}>
        <div className="cardTop">
          <div>
            <p>Bakiye</p>
            <h4>{card?.balance}₺</h4>
          </div>
          <img src={ChipCard} alt="" />
        </div>
        <div className="cardBody">
          <div>
            <p className="title">Kart Sahibi</p>
            <p>{card?.cardOwner}</p>
          </div>
          <div>
            <p className="title">Son Kullanma Tarihi</p>
            <p>{card?.expirationDate}</p>
          </div>
        </div>
        <div className="cardFooter">
          <p>{card?.cardNumber}</p>
          <img src={MastercardLogo} alt="" />
        </div>
      </div>


      )
    })}
    </>
  );
};
