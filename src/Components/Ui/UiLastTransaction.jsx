import { Link } from "react-router-dom";
import "../../assets/style/ui-styles/LastTransaction.scss";
import CategoryImage from "../../assets/images/Category.png";
import BankContext from "../../Context/BankContext";
import { useContext } from "react";
export const UiLastTransaction = () => {
  const { transactionList } = useContext(BankContext);
  let newTransactionList = [];
  const control = transactionList>6
  if (control) {
    for (let i = 0; i < 6; i++) {
      newTransactionList.push(transactionList[i]);
    }
  }else{
    newTransactionList=transactionList;
  }
  return (
    <div id="lastTransactionContainer">
      <div className="section">
        <h3>Son Harcamalar</h3>
        <Link to="/bankTransactions"> Tümünü Gör </Link>
      </div>
      <div className="lastTransferList">
        {newTransactionList.map((transfer, index) => {
          return (
            <div className="cardItem" key={index}>
              <img src={CategoryImage} alt="" />
              <div className="details">
                <h4>{transfer?.commet}</h4>
                <p>{transfer?.date}</p>
              </div>
              <div className="category">
                {transfer?.category ? transfer?.category : "Para Transferi"}
              </div>
              <div className="cardDetails">{transfer?.creditCard}</div>
              {transfer?.income ? (
                <div className="priceIn">{transfer?.income}₺</div>
              ) : (
                ""
              )}
              {transfer?.expense ? (
                <div className="priceOut">-{transfer?.expense}₺</div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
