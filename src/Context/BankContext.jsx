/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import axios from "axios";
const BankContext = createContext();

const database = "http://localhost:3000";

const Provider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [personList, setPersonList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
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
    getCardList();
    getPersonList();
    getCategoryList();
  }, []);
  
  let date = new Date();
  let yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  let dateFormat = dd + "." + mm + "." + yyyy;  


  const addMoney = async (data) => {
    await axios.post(database + "/income", {
      creditCard: data.userSelectValue,
      balance: data.userInputValue,
      commet: data.userTextAreaValue,
      date: dateFormat,
    });
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
      database + "/creditCards/" + updateBalance.id,
      updateBalance
    );
  };
  const removeMoney = async (data) => {
    await axios.post(database + "/expense", {
      creditCard: data.userSelectValue,
      category: data.userCategoryValue,
      balance: data.userInputValue,
      commet: data.userTextAreaValue,
      date:dateFormat
    });
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
