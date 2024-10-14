import "../assets/style/AccountManager.scss";
import { UiAccountController } from "./Ui/UiAccountController";
export const AccountManager = () => {
  return (
    <>
      <div className="section">
        <h3>Kart Ekle</h3>
      </div>
      <div id="accountManagerContainer">
        <UiAccountController title="Gelir Ekle" type="income"/>
        <UiAccountController title="Gider Ekle" type="expense"/>
        {/* <UiAccountController title="Alacak Ekle" type="credit"/>
        <UiAccountController title="Borç Ekle" type="debit"/> */}
      </div>
    </>
  );
};
