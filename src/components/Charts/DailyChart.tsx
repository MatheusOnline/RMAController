import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";


function DailyChart({ data }: any) {

  const formatted = data.map((item: any) => ({
    dia: item._id,   // <-- renomeia para o gráfico
    total: item.total
  }));

  return (
    <LineChart width={500} height={300} data={formatted}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dia" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="total" stroke="#41afee" strokeWidth={2} />
    </LineChart>
  );
}

export default DailyChart;
