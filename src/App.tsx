import { DashboardHeader } from './components/DashboardHeader';
import { StatsCards } from './components/StatsCards';
import { RevenueChart } from './components/RevenueChart';
import { RecentActivity } from './components/RecentActivity';
import { QuickActions } from './components/QuickActions';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Dashboard Overview</h1>
          <p className="text-slate-600">Welcome back! Here's what's happening with your business today.</p>
        </div>

        <StatsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <QuickActions />
          </div>
        </div>

        <div className="mt-6">
          <RecentActivity />
        </div>
      </main>
    </div>
  );
}
