import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";



function ReasonChart({data}:any) {
  return (
    <BarChart width={500} height={300}  data={data.map((i:any) => ({ reason: i._id, total: i.total }))}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="motivo" interval={0} angle={-20} textAnchor="end" fontSize={12} />
      <YAxis />
      <Tooltip />
      
      <Bar dataKey="total" fill="#41afee" />
    </BarChart>
  );
}

export default ReasonChart;
