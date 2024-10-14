/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
const BankContext = createContext();    

const database = "http://localhost:3000";

const Provider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [personList, setPersonList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const [incomeList, setIncomeList] = useState([]);
  const [transactionList, setTransactionList] = useState([]);
  useEffect(() => {
    const getCardList = async () => {
      let response = await axios.get(database + "/creditCards");
      setCardList(response.data);
    };
    const getPersonList = async () => {
      let response = await axios.get(database + "/personList");
      setPersonList(response.data);
    };
    const getCategoryList = async () => {
      let response = await axios.get(database + "/category");
      setCategoryList(response.data);
    };
    const getExpensesList = async () => {
      let response = await axios.get(database + "/expense");
      setExpensesList(response.data);
    };
    const getIncomeList = async () => {
      let response = await axios.get(database + "/income");
      setIncomeList(response.data);
    };
    const getTransactionList = async () => {
      let response = await axios.get(database + "/transactionList");
      setTransactionList(response.data.reverse());
    };
    getCardList();
    getPersonList();
    getCategoryList();
    getExpensesList();
    getIncomeList();
    getTransactionList();
  }, []);

  let date = new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  let dateFormat = dd + "." + mm + "." + yyyy;

  const addMoney = async (data) => {
    let dataFormat = {
      creditCard: data.userSelectValue,
      income: parseInt(data.userInputValue),
      commet: data.userTextAreaValue,
      date: dateFormat,
      cardId: cardList
        .filter((card) => card.cardName == data.userSelectValue)
        .map((card) => card.id)
        .toString(),
    };
    await axios.post(database + "/income", dataFormat);
    await axios.post(database + "/transactionList", dataFormat);
    let updateBalance;
    for (let card of cardList) {
      if (card.cardName == data.userSelectValue) {
        updateBalance = {
          id: card.id,
          cardName: card.cardName,
          cardType: card.cardType,
          bankName: card.bankName,
          cardNumber: card.cardNumber,
          cardOwner: card.cardOwner,
          expirationDate: card.expirationDate,
          balance: card.balance + parseInt(data.userInputValue),
          cvc: card.cvc,
        };
      }
    }
    await axios.put(
      database + "/creditCards/"+updateBalance.id,
      updateBalance
    );
  };
  const removeMoney = async (data) => {
    let dataFormat = {
      creditCard: data.userSelectValue,
      category: data.userCategoryValue,
      expense: parseInt(data.userInputValue),
      commet: data.userTextAreaValue,
      date: dateFormat,
      cardId: cardList
        .filter((card) => card.cardName == data.userSelectValue)
        .map((card) => card.id)
        .toString(),
    };
    await axios.post(database + "/expense", dataFormat);
    await axios.post(database + "/transactionList", dataFormat);
    let updateBalance;
    for (let card of cardList) {
      if (card.cardName == data.userSelectValue) {
        updateBalance = {
          id: card.id,
          cardName: card.cardName,
          cardType: card.cardType,
          bankName: card.bankName,
          cardNumber: card.cardNumber,
          cardOwner: card.cardOwner,
          expirationDate: card.expirationDate,
          balance: card.balance - parseInt(data.userInputValue),
          cvc: card.cvc,
        };
      }
    }
    await axios.put(
      database + "/creditCards/" + updateBalance.id,
      updateBalance
    );
  };
  const addCredit = async (data) => {
    await axios.post(database + "/creditList", {
      creditCard: data.userSelectValue,
      balance: data.userInputValue,
      commet: data.userTextAreaValue,
    });
  };
  const addDebit = async (data) => {
    await axios.post(database + "/debitList", {
      creditCard: data.userSelectValue,
      balance: data.userInputValue,
      commet: data.userTextAreaValue,
    });
  };
  const addCard = async (data) => {
    await axios.post(database + "/creditCards", {
      cardName: data.cardNameValue,
      cardType: data.cardTypeValue,
      bankName: data.bankNameValue,
      cardNumber: data.cardNumberValue,
      cardOwner: data.cardOwnerValue,
      expirationDate: data.expirationDateValue,
      balance: 0,
      cvc: data.cvcValue,
    });
  };
  const sharedValues = {
    cardList,
    personList,
    categoryList,
    expensesList,
    incomeList,
    transactionList,
    addMoney,
    removeMoney,
    addCredit,
    addDebit,
    addCard,
  };
  return (
    <BankContext.Provider value={sharedValues}>{children}</BankContext.Provider>
  );
};

export { Provider };
export default BankContext;
