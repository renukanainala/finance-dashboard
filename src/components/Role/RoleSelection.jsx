import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const RoleSelection = () => {
  const { setRole, setIsRoleSelected } = useContext(AppContext);

  const handleSelect = (role) => {
    setRole(role);
    setIsRoleSelected(true);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Select Your Role</h1>

      <div style={styles.box}>
        <div style={styles.card} onClick={() => handleSelect("viewer")}>
          👁️
          <h2>Viewer</h2>
          <p>Can only view data</p>
        </div>

        <div style={styles.card} onClick={() => handleSelect("admin")}>
          ⚙️
          <h2>Admin</h2>
          <p>Full access & control</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #afdbbf, #bfe0cb)",
    color: "white",
    fontFamily: "Poppins"
  },

  title: {
    fontSize: "34px",
    marginBottom: "40px"
  },

  box: {
    display: "flex",
    gap: "30px"
  },

  card: {
    width: "200px",
    padding: "30px",
    background: "white",
    color: "#b37c67",
    borderRadius: "15px",
    textAlign: "center",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  }
};

export default RoleSelection;