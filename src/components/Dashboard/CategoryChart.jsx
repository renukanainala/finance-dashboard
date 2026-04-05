import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { calculateSummary } from "../../utils/helpers";

const CategoryChart = ({ transactions }) => {
  const { income, expense, balance } = calculateSummary(transactions);

  const data = [
    { name: "Income", value: income },
    { name: "Expense", value: expense },
    { name: "Savings", value: balance }
  ];

  const COLORS = ["#22c55e", "#ef4444", "#3b82f6"];

  // ✅ Custom Label (Name + Percentage)
  const renderLabel = ({ name, percent }) => {
    return `${name} ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Finance Overview</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label={renderLabel}   // ✅ important
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;