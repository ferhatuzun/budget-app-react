import MoneyPng from "../../assets/images/Money.png";
import "../../assets/style/ui-styles/GeneralBalance.scss";
export const UiGeneralBalance = () => {
  return (
    <>
      <div id="generalBalance">
        <div className="logoContainer">
          <img src={MoneyPng} alt="" />
        </div>
        <div className="contentContainer">
          <p className="title">Toplam</p>
          <h3 className="balance">15.454₺</h3>
        </div>
      </div>
    </>
  );
};
