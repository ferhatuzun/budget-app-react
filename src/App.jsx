import "./assets/style/Main.scss";
import { AccountManager } from "./Components/AccountManager";
import { BankTransactions } from "./Components/BankTransactions";
import { CardExpenses } from "./Components/CardExpenses";
import { CreditCards } from "./Components/CreditCards";
import { Dashboard } from "./Components/Dashboard";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div style={{ backgroundColor: "#F5F7FA" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/creditCards" element={<CreditCards />} />
            <Route
              path="/creditCards/cardExpenses"
              element={<CardExpenses />}
            />
            <Route path="/bankTransactions" element={<BankTransactions/>} />
            <Route path="/accountManager" element={<AccountManager />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
