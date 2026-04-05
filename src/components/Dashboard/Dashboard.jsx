import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { calculateSummary } from "../../utils/helpers";
import BalanceChart from "./BalanceChart";
import CategoryChart from "./CategoryChart";

const Dashboard = () => {
  const { transactions } = useContext(AppContext);
  const { income, expense, balance } = calculateSummary(transactions);

  return (
    <div className="card">
      <h2>Dashboard</h2>

      {/* SUMMARY */}
      <div className="dashboard">
        <div className="summary-card income">Income: ₹{income}</div>
        <div className="summary-card expense">Expense: ₹{expense}</div>
        <div className="summary-card balance">Savings: ₹{balance}</div>
      </div>

      {/* CHARTS */}
      <div className="chart-row">
        <BalanceChart transactions={transactions} />
        <CategoryChart transactions={transactions} />
      </div>
    </div>
  );
};

export default Dashboard;