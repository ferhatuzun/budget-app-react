/* eslint-disable react/prop-types */
import CategoryImage from "../../assets/images/Category.png";
import "../../assets/style/ui-styles/CardExpensesList.scss";
import BankContext from "../../Context/BankContext";
import { useContext } from "react";
import { UiNoData } from "./UiNoData";
export const UiCardExpensesList = ({ cardId,type }) => {
  const { transactionList } = useContext(BankContext);
  const newArray = type ? transactionList : transactionList.filter((item) => item.cardId == cardId);
  return (
    <>
      {newArray != "" ? (
        <div className="lastTransferList">
          {newArray.map((item, index) => {
            return (
              <div className="cardItem" key={index}>
                <img src={CategoryImage} alt="" />
                <div className="details">
                  <h4>{item.commet}</h4>
                  <p>{item.date}</p>
                </div>
                <div className="category">
                  {item.category ? item.category : "Para Transferi"}
                </div>
                <div className="cardDetails">{item.creditCard}</div>
                {item.expense ? (
                  <div className="price priceOut">-{item.expense}₺</div>
                ) : (
                  <div className="price priceIn">{item.income}₺</div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <UiNoData />
      )}
    </>
  );
};
