import CategoryImage from "../../assets/images/Category.png";
import "../../assets/style/ui-styles/CardExpensesList.scss";

export const UiCardExpensesList = () => {
  return (
      <div className="lastTransferList">
        <div className="cardItem">
          <img src={CategoryImage} alt="" />
          <div className="details">
            <h4>Spotify Aboneliği</h4>
            <p>25 Ocak 204</p>
          </div>
          <div className="category">Online</div>
          <div className="cardDetails">1234 ****</div>
          <div className="price priceIn">150₺</div>
        </div>
        <div className="cardItem">
          <img src={CategoryImage} alt="" />
          <div className="details">
            <h4>Spotify Aboneliği</h4>
            <p>25 Ocak 204</p>
          </div>
          <div className="category">Online</div>
          <div className="cardDetails">1234 ****</div>
          <div className="price priceOut">-150₺</div>
        </div>
        <div className="cardItem">
          <img src={CategoryImage} alt="" />
          <div className="details">
            <h4>Spotify Aboneliği</h4>
            <p>25 Ocak 204</p>
          </div>
          <div className="category">Online</div>
          <div className="cardDetails">1234 ****</div>
          <div className="price priceOut">-150₺</div>
        </div>
        <div className="cardItem">
          <img src={CategoryImage} alt="" />
          <div className="details">
            <h4>Spotify Aboneliği</h4>
            <p>25 Ocak 204</p>
          </div>
          <div className="category">Online</div>
          <div className="cardDetails">1234 ****</div>
          <div className="price priceIn">150₺</div>
        </div>
        <div className="cardItem">
          <img src={CategoryImage} alt="" />
          <div className="details">
            <h4>Spotify Aboneliği</h4>
            <p>25 Ocak 204</p>
          </div>
          <div className="category">Online</div>
          <div className="cardDetails">1234 ****</div>
          <div className="price priceIn">150₺</div>
        </div>
      </div>
      
  );
};
