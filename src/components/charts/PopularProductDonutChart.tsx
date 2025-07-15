import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Modern Sofa", value: 4000 },
  { name: "Wooden Bed", value: 3000 },
  { name: "Office Chair", value: 2000 },
  { name: "Bookshelf", value: 1500 },
  { name: "Dining Table", value: 1000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28FD0"];

function PopularProductDonutChart() {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mt-10 h-[400px] flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Popular Products</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={110}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => {
              const numericValue = typeof value === "number" ? value : Number(value);
              const percent = ((numericValue / total) * 100).toFixed(1);
              return `${percent}% (${numericValue})`;
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PopularProductDonutChart;
