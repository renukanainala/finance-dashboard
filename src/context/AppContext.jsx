import { createContext, useState, useEffect } from "react";
import { transactions as initialData } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // ✅ Load transactions from localStorage
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialData;
  });

  // ✅ Role system (DON’T REMOVE THIS)
  const [role, setRole] = useState("");
  const [isRoleSelected, setIsRoleSelected] = useState(false);

  const [search, setSearch] = useState("");

  // ✅ Save transactions to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider value={{
      transactions,
      setTransactions,
      role,
      setRole,
      isRoleSelected,
      setIsRoleSelected,
      search,
      setSearch
    }}>
      {children}
    </AppContext.Provider>
  );
};