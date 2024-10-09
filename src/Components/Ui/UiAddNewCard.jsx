import { UiInput } from "./UiInput";
import "../../assets/style/ui-styles/AddNewCard.scss";
import { useState, useContext } from "react";
import bankContext from "../../Context/BankContext";
export const UiAddNewCard = () => {
  const [cardNameValue, setCardNameValue] = useState("");
  const [cardTypeValue, setCardTypeValue] = useState("");
  const [bankNameValue, setBankNameValue] = useState("");
  const [cardNumberValue, setCardNumberValue] = useState("");
  const [cardOwnerValue, setCardOwnerValue] = useState("");
  const [expirationDateValue, setExpirationDateValue] = useState("");
  const [cvcValue, setCvcValue] = useState("");

  const { cardList, addCard } = useContext(bankContext);

  const cardName = (e) => {
    setCardNameValue(e);
  };
  const cardType = (e) => {
    setCardTypeValue(e);
  };
  const bankName = (e) => {
    setBankNameValue(e);
  };
  const cardNumber = (e) => {
    setCardNumberValue(e);
  };
  const cardOwner = (e) => {
    setCardOwnerValue(e);
  };
  const cvc = (e) => {
    setCvcValue(e);
  };
  const expirationDate = (e) => {
    setExpirationDateValue(e);
  };
  const handleSubmit = (e) => {
    let cardStatus=false
    e.preventDefault();
    for (let card of cardList) {
      if (card.cardName == cardNameValue) {
        cardStatus=true;
        alert("Aynı isimde 2 kart olamaz !")
        break;
      }
    }
    if(!cardStatus){
      addCard({
        cardNameValue,
        cardTypeValue,
        bankNameValue,
        cardNumberValue,
        cardOwnerValue,
        expirationDateValue,
        cvcValue,
      });
      location.reload();
    }
  };
  return (
    <>
      <div id="newCardContainer">
        <div className="section">
          <h3>Kart Ekle</h3>
        </div>
        <form className="newCardForm" onSubmit={handleSubmit}>
          <UiInput
            text="Kart İsmi"
            placeholder="Maaş kartı vs."
            type="text"
            userInput={cardName}
          />
          <UiInput
            text="Kart Tipi"
            placeholder="Banka kartı, Kredi kartı"
            type="text"
            userInput={cardType}
          />
          <UiInput
            text="Banka Adı"
            placeholder="Akbank, Garanti vb."
            type="text"
            userInput={bankName}
          />
          <UiInput
            text="Kart Numarası"
            placeholder="16 haneli kart numarası"
            type="number"
            userInput={cardNumber}
          />
          <UiInput
            text="Kart Sahibi"
            placeholder="Ad, soyad"
            type="text"
            userInput={cardOwner}
          />
          <UiInput
            text="Son Kullanma Tarihi"
            placeholder="'AY/YIL' formatında"
            type="text"
            userInput={expirationDate}
          />
          <UiInput
            text="CVC"
            placeholder="Kartınızın arkasındaki 3 haneli kod"
            type="number"
            userInput={cvc}
          />
          <UiInput type="hidden" />
          <button className="btnAddCard">Kart Ekle</button>
        </form>
      </div>
    </>
  );
};
