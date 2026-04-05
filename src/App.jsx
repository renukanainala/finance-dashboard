import { useContext } from "react";
import { AppContext } from "./context/AppContext";

import Dashboard from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/Transactions";
import Insights from "./components/Insights/Insights";
import RoleSelection from "./components/Role/RoleSelection";

function App() {
  const { isRoleSelected } = useContext(AppContext);

  // 👇 SHOW ROLE SELECTION FIRST
  if (!isRoleSelected) {
    return <RoleSelection />;
  }

  // 👇 AFTER SELECTING ROLE
  return (
    <div style={{ maxWidth: "1100px", margin: "auto" }}>
      <h1>Finance Dashboard</h1>

      <div className="card">
        <Dashboard />
      </div>

      <div className="card">
        <Transactions />
      </div>

      <div className="card">
        <Insights />
      </div>
    </div>
  );
}

export default App;