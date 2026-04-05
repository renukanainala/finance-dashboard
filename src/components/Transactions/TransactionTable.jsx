import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionTable = () => {
  const { transactions, search } = useContext(AppContext);
  const [sortType, setSortType] = useState("");

  let filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting
  if (sortType === "amount") {
    filtered.sort((a, b) => a.amount - b.amount);
  } else if (sortType === "date") {
    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  return (
  <div className="table">
    <select onChange={(e) => setSortType(e.target.value)}>
      <option value="">Sort By</option>
      <option value="amount">Amount</option>
      <option value="date">Date</option>
    </select>

    {filtered.map(t => (
      <div className="table-row" key={t.id}>
        <span>{t.date}</span>
        <span>{t.category}</span>
        <span>₹{t.amount}</span>
      </div>
    ))}
  </div>
);
};

export default TransactionTable;