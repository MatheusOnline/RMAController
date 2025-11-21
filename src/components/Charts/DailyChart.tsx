import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";


function DailyChart({ data }: any) {
  
  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const formatted = data.map((item: any) => {
    const date = new Date(item._id); // converte string para Date
    const diaSemana = diasSemana[date.getDay()];

    return {
      dia: diaSemana,   // agora o gráfico recebe o nome do dia
      total: item.total
    };
  });

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
