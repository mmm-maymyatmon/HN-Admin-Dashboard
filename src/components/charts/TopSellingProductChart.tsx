import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';

const data = [
  { name: 'Modern Sofa', unitsSold: 120, revenue: 24000 },
  { name: 'Wooden Bed', unitsSold: 90, revenue: 27000 },
  { name: 'Office Chair', unitsSold: 200, revenue: 15000 },
  { name: 'Bookshelf', unitsSold: 80, revenue: 8000 },
  { name: 'Dining Table', unitsSold: 60, revenue: 18000 },
];

function TopSellingProductChart() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mt-10 flex flex-col h-[400px]">
      <h2 className="text-xl font-semibold mb-4">Top Selling Products</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="unitsSold" fill="#8884d8" name="Units Sold" />
          <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TopSellingProductChart;
