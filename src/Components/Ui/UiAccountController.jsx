/* eslint-disable react/prop-types */
import { useState, useContext } from "react";
import { UiInput } from "../Ui/UiInput";
import { UiTextArea } from "../Ui/UiTextArea";
import { UiSelect } from "./UiSelect";
import BankContext from "../../Context/BankContext";
export const UiAccountController = ({ title, type }) => {
  const [userInputValue, setUserInputValue] = useState("");
  const [userTextAreaValue, setUserTextAreaValue] = useState("");
  const [userSelectValue, setUserSelectValue] = useState("");
  const [userCategoryValue, setUserCategoryValue] = useState("");
  const { cardList, personList, categoryList, addMoney, removeMoney,addCredit,addDebit } =
    useContext(BankContext);
  const userInput = (e) => {
    setUserInputValue(e);
  };
  const userTextArea = (e) => {
    setUserTextAreaValue(e);
  };
  const userSelect = (e) => {
    setUserSelectValue(e);
  };
  const userCategory = (e) => {
    setUserCategoryValue(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name == "addMoney") {
      if (
        userInputValue != "" &&
        userTextAreaValue != "" &&
        userSelectValue != ""
      ) {
        addMoney({ userSelectValue, userInputValue, userTextAreaValue });
        location.reload();
      } else {
        alert("Lütfen tüm bilgileri doldurunuz.");
      }
    }
    if (e.target.name == "removeMoney") {
      if (
        userInputValue != "" &&
        userTextAreaValue != "" &&
        userSelectValue != ""
      ) {
        removeMoney({
          userSelectValue,
          userInputValue,
          userCategoryValue,
          userTextAreaValue,
        });
        location.reload();
      } else {
        alert("Lütfen tüm bilgileri doldurunuz.");
      }
    }
    if (e.target.name == "credit") {
      if (
        userInputValue != "" &&
        userTextAreaValue != "" &&
        userSelectValue != ""
      ) {
        addCredit({ userSelectValue, userInputValue, userTextAreaValue });
        location.reload();
      } else {
        alert("Lütfen tüm bilgileri doldurunuz.");
      }
    }
    if (e.target.name == "debit") {
      if (
        userInputValue != "" &&
        userTextAreaValue != "" &&
        userSelectValue != ""
      ) {
        addDebit({ userSelectValue, userInputValue, userTextAreaValue });
        location.reload();
      } else {
        alert("Lütfen tüm bilgileri doldurunuz.");
      }
    }
  };

  return (
    <>
      {type == "income" ? (
        <div className="addMoney">
          <div style={{ marginBottom: "1rem" }}>
            <h3>{title}</h3>
          </div>
          <form
            className="addMoneyForm"
            onSubmit={handleSubmit}
            name="addMoney"
          >
            <UiSelect
              text="Kart"
              type="text"
              userSelect={userSelect}
              data={cardList}
            />
            <UiInput
              text="Tutar"
              placeholder=""
              type="number"
              userInput={userInput}
            />
            <UiTextArea text="Açıklama" userTextArea={userTextArea} />
            <button className="btnAddCard">Kaydet</button>
          </form>
        </div>
      ) : (
        ""
      )}

      {type == "expense" ? (
        <div className="addMoney">
          <div style={{ marginBottom: "1rem" }}>
            <h3>{title}</h3>
          </div>
          <form
            className="addMoneyForm"
            onSubmit={handleSubmit}
            name="removeMoney"
          >
            <UiSelect
              text="Kart"
              placeholder="Banka kartı, Kredi kartı"
              type="text"
              userSelect={userSelect}
              data={cardList}
            />
            <UiSelect
              text="Kategori"
              userSelect={userCategory}
              data={categoryList}
            />

            <UiInput text="Tutar" type="number" userInput={userInput} />
            <UiTextArea text="Açıklama" userTextArea={userTextArea} />
            <UiInput type="hidden" />
            <button className="btnAddCard">Kaydet</button>
          </form>
        </div>
      ) : (
        ""
      )}

      {type == "credit" ? (
        <div className="addMoney">
          <div style={{ marginBottom: "1rem" }}>
            <h3>{title}</h3>
          </div>
          <form className="addMoneyForm" onSubmit={handleSubmit} name="credit">
            <UiSelect
              text="Kişi Seçimi"
              userSelect={userSelect}
              personList
              data={personList}
            />
            <UiInput
              text="Tutar"
              placeholder=""
              type="number"
              userInput={userInput}
            />
            <UiTextArea text="Açıklama" userTextArea={userTextArea} />
            <button className="btnAddCard">Kaydet</button>
          </form>
        </div>
      ) : (
        ""
      )}

      {type == "debit" ? (
        <div className="addMoney">
          <div style={{ marginBottom: "1rem" }}>
            <h3>{title}</h3>
          </div>
          <form className="addMoneyForm" onSubmit={handleSubmit} name="debit">
            <UiSelect
              text="Kişi Seçimi"
              userSelect={userSelect}
              data={personList}
            />
            <UiInput
              text="Tutar"
              placeholder=""
              type="number"
              userInput={userInput}
            />
            <UiTextArea text="Açıklama" userTextArea={userTextArea} />
            <button className="btnAddCard">Kaydet</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
