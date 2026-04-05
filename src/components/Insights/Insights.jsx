import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { calculateSummary } from "../../utils/helpers";

const Insights = () => {
  const { transactions } = useContext(AppContext);

  const { income, expense, balance } = calculateSummary(transactions);

  // ✅ Filter only expenses
  const expenses = transactions.filter(t => t.type === "expense");

  // ✅ Find highest expense category
  let highestCategory = "";
  let highestAmount = 0;

  const categoryMap = {};

  expenses.forEach(t => {
    if (!categoryMap[t.category]) {
      categoryMap[t.category] = 0;
    }
    categoryMap[t.category] += t.amount;
  });

  for (let cat in categoryMap) {
    if (categoryMap[cat] > highestAmount) {
      highestAmount = categoryMap[cat];
      highestCategory = cat;
    }
  }

  return (
    <div className="card">
      <h2>Insights</h2>

      <p>💰 Total Income: ₹{income}</p>
      <p>💸 Total Expenses: ₹{expense}</p>
      <p>📊 Savings: ₹{balance}</p>

      <hr style={{ margin: "10px 0" }} />

      <p>
        🔥 Highest Spending Category: <b>{highestCategory}</b> (₹{highestAmount})
      </p>

      <p>
        📉 Expense Ratio:{" "}
        {income ? ((expense / income) * 100).toFixed(1) : 0}% of income
      </p>

      <p>
        {balance > 0
          ? "✅ You are saving money! Good job."
          : "⚠️ Your expenses exceed income. Control spending."}
      </p>
    </div>
  );
};

export default Insights;