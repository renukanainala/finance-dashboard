import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import FilterBar from "./FilterBar";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Transactions = () => {
  const { role } = useContext(AppContext);

  return (
    <div>
      <h2>Transactions</h2>

      <FilterBar />

      {role === "admin" && <TransactionForm />}

      <TransactionTable />
    </div>
  );
};

export default Transactions;