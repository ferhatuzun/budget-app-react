import "../../assets/style/ui-styles/CardListDetail.scss";
import { UiCardListDetailItem } from "./UiCardListDetailItem";
import { useContext } from "react";
import BankContext from "../../Context/BankContext";
export const UiCardListDetail = () => {
  const {cardList} = useContext(BankContext)
  return (
    <>
      <div id="cardListDetails">
        <div className="section">
          <h3>Kart Detayları</h3>
        </div>
        <div className="cardDetailList">
            <UiCardListDetailItem  cardList={cardList}/>

        </div>
      </div>
    </>
  );
};
