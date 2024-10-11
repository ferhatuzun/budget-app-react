/* eslint-disable react/prop-types */
import MoneyPng from "../../assets/images/Money.png";
import IncomeIcon from "../../assets/images/IncomeIcon.png";
import ExpensesIcon from "../../assets/images/ExpensesIcon.png";
import "../../assets/style/ui-styles/GeneralBalance.scss";
import BankContext from "../../Context/BankContext";
import { useContext } from "react";
export const UiGeneralBalance = ({ title }) => {
  const { cardList, incomeList, expensesList } = useContext(BankContext);
  let total = 0;
  cardList.forEach((item) => {
    total += item.balance;
  });
  let income = 0;
  incomeList.forEach((item) => {
    income += item.income;
  });
  let expense = 0;
  expensesList.forEach((item) => {
    expense += item.expense;
  });
  return (
    <>
      {title == "Toplam" ? (
        <div id="generalBalance">
          <div className="logoContainer">
            <img src={MoneyPng} alt="" />
          </div>
          <div className="contentContainer">
            <p className="title">{title}</p>
            <h3 className="balance">{total}₺</h3>
          </div>
        </div>
      ) : (
        ""
      )}

      {title == "Gelir" ? (
        <div id="generalBalance">
          <div className="logoContainer">
            <img src={IncomeIcon} alt="" />
          </div>
          <div className="contentContainer">
            <p className="title">{title}</p>
            <h3 className="balance">{income}₺</h3>
          </div>
        </div>
      ) : (
        ""
      )}

      {title == "Gider" ? (
        <div id="generalBalance">
          <div className="logoContainer">
            <img src={ExpensesIcon} alt="" />
          </div>
          <div className="contentContainer">
            <p className="title">{title}</p>
            <h3 className="balance">{expense}₺</h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
