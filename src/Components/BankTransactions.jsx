import { UiCardExpensesList } from "./Ui/UiCardExpensesList";

export const BankTransactions = () => {
  return (
    <>
    <div id="expenseList">
        <div style={{padding:"2rem"}}>
          <h2>Tüm Hesap Hareketleri</h2>
        </div>
        <UiCardExpensesList />
      </div>
    </>
  )
}
