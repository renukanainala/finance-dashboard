import { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TransactionForm = () => {
  const { transactions, setTransactions } = useContext(AppContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense"
  });

  const handleSubmit = () => {
    setTransactions([
      ...transactions,
      { ...form, id: Date.now(), amount: Number(form.amount) }
    ]);
  };

  return (
  <div className="form">
    <input type="date" value={form.date}
      onChange={(e) => setForm({ ...form, date: e.target.value })} />

    <input placeholder="Amount"
      value={form.amount}
      onChange={(e) => setForm({ ...form, amount: e.target.value })} />

    <input placeholder="Category"
      value={form.category}
      onChange={(e) => setForm({ ...form, category: e.target.value })} />

    <select value={form.type}
      onChange={(e) => setForm({ ...form, type: e.target.value })}>
      <option value="expense">Expense</option>
      <option value="income">Income</option>
    </select>

    <button onClick={handleSubmit}>Add</button>
  </div>
);
};

export default TransactionForm;