import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const monthlyUserActivityData = [
    { month: "Jan", activeUsers: 4000 },
    { month: "Feb", activeUsers: 3000 },
    { month: "Mar", activeUsers: 2000 },
    { month: "Apr", activeUsers: 2780 },
    { month: "May", activeUsers: 1890 },
    { month: "Jun", activeUsers: 2390 },
    { month: "Jul", activeUsers: 3490 },
  ];
  
  function MonthlyUserActivity() {
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col h-[400px]">
        <h3 className="text-xl font-semibold mb-4 text-[#376e6b]">Monthly User Activity</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={monthlyUserActivityData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="month"
              stroke="#6e7b8a"
              tick={{ fontSize: 12, fontWeight: 500, fill: "#6e7b8a" }}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              stroke="#6e7b8a"
              tick={{ fontSize: 12, fontWeight: 500, fill: "#6e7b8a" }}
              width={50}
            />
            <Tooltip
              cursor={{ fill: "rgba(55, 110, 107, 0.1)" }}
              contentStyle={{ borderRadius: 8, borderColor: "#d1d5db", fontSize: 12 }}
              formatter={(value: number) => value.toLocaleString()}
            />
            <Bar
              dataKey="activeUsers"
              fill="#dee3fa"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  export default MonthlyUserActivity;
  