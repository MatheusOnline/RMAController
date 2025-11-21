import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";


function DailyChart({data}:any) {
  return (
    <LineChart width={500} height={300} data={data.map((i:any) => ({ date: i._id, total: i.total }))}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dia" />
      <YAxis />
      <Tooltip />
      
      <Line type="monotone" dataKey="total" stroke="#41afee" strokeWidth={2} />
    </LineChart>
  );
}

export default DailyChart; 
