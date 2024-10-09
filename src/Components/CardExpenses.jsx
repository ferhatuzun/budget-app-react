import { UiCardExpensesList } from "./Ui/UiCardExpensesList";

export const CardExpenses = () => {
  return (
    <>
      <div id="expenseList">
        <div style={{padding:"2rem"}}>
          <h2>Hesap Hareketleri</h2>
        </div>
        <UiCardExpensesList />
      </div>
    </>
  );
};
