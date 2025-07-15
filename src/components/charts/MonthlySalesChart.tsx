import { DollarSign, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlySalesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 2000 },
  { month: "Apr", sales: 2780 },
  { month: "May", sales: 1890 },
  { month: "Jun", sales: 2390 },
  { month: "Jul", sales: 3490 },
  { month: "Aug", sales: 4000 },
  { month: "Sep", sales: 3000 },
  { month: "Oct", sales: 2000 },
  { month: "Nov", sales: 2780 },
  { month: "Dec", sales: 1890 },
];

function MonthlySalesChart() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3 text-gray-800">
          <div className="bg-gray-100 rounded-full p-2">
            <DollarSign className="h-6 w-6 text-[#376e6b]" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#376e6b]">Monthly Sales</h3>
            <p className="text-sm text-gray-500">Revenue over last 12 months</p>
          </div>
        </div>

        <div className="text-right text-gray-800">
          <p className="text-2xl font-bold text-[#376e6b]">$250,000</p>
          <div className="flex items-center justify-end gap-1 mt-1 text-green-600 text-sm font-medium">
            <TrendingUp className="h-4 w-4" />
            <span>+10%</span>
            <span className="text-gray-400 font-normal ml-1">vs last month</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={monthlySalesData}
            margin={{ top: 5, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#376e6b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#376e6b" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              stroke="#6e7b8a"
              tick={{ fontWeight: "600", fontSize: 12, fill: "#6e7b8a" }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              stroke="#6e7b8a"
              tick={{ fontWeight: "600", fontSize: 12, fill: "#6e7b8a" }}
              tickFormatter={(value) => `$${value / 1000}k`}
              width={50}
            />
            <Tooltip
              formatter={(value: number) => `$${value.toLocaleString()}`}
              contentStyle={{ borderRadius: 8, borderColor: "#d1d5db" }}
              labelStyle={{ fontSize: "12px" }}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="#376e6b"
              fill="url(#colorSales)"
              strokeWidth={2}
              dot={{ r: 3, strokeWidth: 1, stroke: "#376e6b" }}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlySalesChart;
