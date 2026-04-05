import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const BalanceChart = ({ transactions }) => {
  return (
    <div>
      <h3>Transaction Trend</h3>

      <LineChart width={450} height={280} data={transactions}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#22c55e"
          strokeWidth={3}
        />
      </LineChart>
    </div>
  );
};

export default BalanceChart;