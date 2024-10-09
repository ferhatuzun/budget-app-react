import { Link } from "react-router-dom"
import "../../assets/style/ui-styles/LastTransaction.scss"
import CategoryImage from "../../assets/images/Category.png"
export const UiLastTransaction = () => {
  return (
    <div id="lastTransactionContainer">
        <div className="section">
          <h3>Son Harcamalar</h3>
          <Link to="/creditCards"> Tümünü Gör </Link>
        </div>
        <div className="lastTransferList">
            <div className="cardItem">
                <img src={CategoryImage} alt="" />
                <div className="details">
                    <h4>Spotify Aboneliği</h4>
                    <p>25 Ocak 204</p>
                </div>
                <div className="category">
                    Online
                </div>
                <div className="cardDetails">
                    1234 ****
                </div>
                <div className="price">
                    -150₺
                </div>
            </div>
            <div className="cardItem">
                <img src={CategoryImage} alt="" />
                <div className="details">
                    <h4>Spotify Aboneliği</h4>
                    <p>25 Ocak 204</p>
                </div>
                <div className="category">
                    Online
                </div>
                <div className="cardDetails">
                    1234 ****
                </div>
                <div className="price">
                    -150₺
                </div>
            </div>
            <div className="cardItem">
                <img src={CategoryImage} alt="" />
                <div className="details">
                    <h4>Spotify Aboneliği</h4>
                    <p>25 Ocak 204</p>
                </div>
                <div className="category">
                    Online
                </div>
                <div className="cardDetails">
                    1234 ****
                </div>
                <div className="price">
                    -150₺
                </div>
            </div>
            <div className="cardItem">
                <img src={CategoryImage} alt="" />
                <div className="details">
                    <h4>Spotify Aboneliği</h4>
                    <p>25 Ocak 204</p>
                </div>
                <div className="category">
                    Online
                </div>
                <div className="cardDetails">
                    1234 ****
                </div>
                <div className="price">
                    -150₺
                </div>
            </div>
            <div className="cardItem">
                <img src={CategoryImage} alt="" />
                <div className="details">
                    <h4>Spotify Aboneliği</h4>
                    <p>25 Ocak 204</p>
                </div>
                <div className="category">
                    Online
                </div>
                <div className="cardDetails">
                    1234 ****
                </div>
                <div className="price">
                    -150₺
                </div>
            </div>
        </div>
      </div>
  )
}
