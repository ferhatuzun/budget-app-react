import "../../assets/style/ui-styles/creditCard.scss";
import MastercardLogo from "../../assets/images/Mastercard.png";
import ChipCard from "../../assets/images/Chip_Card.png";
export const UiCreditCards = () => {
  return (
    <>
      <div id="creditCardContainer">
        <div className="cardTop">
          <div>
            <p>Bakiye</p>
            <h4>4,687₺</h4>
          </div>
          <img src={ChipCard} alt="" />
        </div>
        <div className="cardBody">
          <div>
            <p className="title">Kart Sahibi</p>
            <p>Ferhat Uzun</p>
          </div>
          <div>
            <p className="title">Son Kullanma Tarihi</p>
            <p>12/29</p>
          </div>
        </div>
        <div className="cardFooter">
          <p>3547 5689 5478 2569</p>
          <img src={MastercardLogo} alt="" />
        </div>
      </div>
      
      
    </>
  );
};
