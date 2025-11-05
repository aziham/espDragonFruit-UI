import { SystemUsageChart } from '@/features/ui';

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">System Dashboard</h1>
          <p className="text-gray-400">Real-time system performance monitoring</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <SystemUsageChart />
          </div>
        </div>
      </div>
    </div>
  );
}
