import "../../assets/style/ui-styles/CardListDetail.scss";
import { UiCardListDetailItem } from "./UiCardListDetailItem";
import { useContext } from "react";
import BankContext from "../../Context/BankContext";
import { UiNoData } from "./UiNoData";
export const UiCardListDetail = () => {
  const {cardList} = useContext(BankContext)
  return (
    <>
      <div id="cardListDetails">
        <div className="section">
          <h3>Kart Detayları</h3>
        </div>
        {cardList!=""?
        <div className="cardDetailList">
            <UiCardListDetailItem  cardList={cardList}/>

        </div>
        :
        <UiNoData/>
        }
      </div>
    </>
  );
};
