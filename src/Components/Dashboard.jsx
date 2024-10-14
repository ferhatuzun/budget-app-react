import { UiGeneralBalance } from "./Ui/UiGeneralBalance";
import "../assets/style/Dashboard.scss";
import { UiCardsPreview } from "./Ui/UiCardsPreview";
import { UiLastTransaction } from "./Ui/UiLastTransaction";
export const Dashboard = () => {
  return (
    <>
      <div>
        <div className="sectionTitle">Genel Bakış</div>
        <div className="generalBalanceContainer">
          <UiGeneralBalance title="Toplam" />
          <UiGeneralBalance title="Gelir" />
          <UiGeneralBalance title="Gider"  />
          <UiGeneralBalance title="Alacak" />
          <UiGeneralBalance title="Borç"   />
        </div>
        <UiCardsPreview />
        <UiLastTransaction />
      </div>
    </>
  );
};
