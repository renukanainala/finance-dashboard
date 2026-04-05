import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const FilterBar = () => {
  const { search, setSearch } = useContext(AppContext);

  return (
  <div className="filter-bar">
    <input
      type="text"
      placeholder="Search category..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
);
};

export default FilterBar;