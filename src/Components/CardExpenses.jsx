import { UiCardExpensesList } from "./Ui/UiCardExpensesList";
import { useParams } from "react-router-dom";
export const CardExpenses = () => {
  const {cardId} = useParams()
  return (
    <>
      <div id="expenseList">
        <div style={{padding:"2rem"}}>
          <h2>Hesap Hareketleri</h2>
        </div>
        <UiCardExpensesList cardId={cardId} />
      </div>
    </>
  );
};
