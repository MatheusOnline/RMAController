import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { dia: "Seg", total: 15 },
  { dia: "Ter", total: 22 },
  { dia: "Qua", total: 18 },
  { dia: "Qui", total: 30 },
  { dia: "Sex", total: 10 },
  { dia: "Sáb", total: 5 },
  { dia: "Dom", total: 2 },
];

function DailyChart() {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dia" />
      <YAxis />
      <Tooltip />
      
      <Line type="monotone" dataKey="total" stroke="#41afee" strokeWidth={2} />
    </LineChart>
  );
}

export default DailyChart;
