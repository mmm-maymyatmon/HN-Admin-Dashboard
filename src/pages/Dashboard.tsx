import MonthlySalesChart from '@/components/charts/MonthlySalesChart'
import MonthlyUserActivity from '@/components/charts/MonthlyUserActivity'
import PopularProductBarChart from '@/components/charts/PopularProductDonutChart'
import TopSellingProductChart from '@/components/charts/TopSellingProductChart';

function Dashboard() {
  return (
      <div>
          <h1 className="text-xl mb-4">Dashboard</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          <MonthlySalesChart />
          <MonthlyUserActivity />
      </div>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='w-full md:w-1/2 lg:w-2/3'>
        <TopSellingProductChart/>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3'>
          <PopularProductBarChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard