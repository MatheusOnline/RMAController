import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { motivo: "Item Errado", total: 100 },
  { motivo: "Item Faltando", total: 40 },
  { motivo: "Mudei de Ideia", total: 25 },
  { motivo: "Dano Estético", total: 10 },
  { motivo: "Não Recebi", total: 10 },
  { motivo: "Embalagem Danificada", total: 10 },
  { motivo: "Funcional com Defeito", total: 10 },
];

function ReasonChart() {
  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="motivo" interval={0} angle={-20} textAnchor="end" fontSize={12} />
      <YAxis />
      <Tooltip />
      
      <Bar dataKey="total" fill="#41afee" />
    </BarChart>
  );
}

export default ReasonChart;
