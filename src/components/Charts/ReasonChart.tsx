import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

import translateReason from "../../utils/translateReason";

function ReasonChart({ data }: any) {
  
  // Ajusta o formato dos dados para o gráfico
  const formatted = data.map((i: any) => ({
    motivo: translateReason(i._id),   // agora XAxis vai ler "motivo"
    total: i.total
  }));

  return (
    <BarChart width={500} height={300} data={formatted}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis 
        dataKey="motivo"
        interval={0}
        angle={-20}
        textAnchor="end"
        fontSize={12}
      />
      <YAxis />
      <Tooltip />
      <Bar dataKey="total" fill="#41afee" />
    </BarChart>
  );
}

export default ReasonChart;
