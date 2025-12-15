import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { month: 'Jan', revenue: 4200, expenses: 2400 },
  { month: 'Feb', revenue: 3800, expenses: 2200 },
  { month: 'Mar', revenue: 5100, expenses: 2800 },
  { month: 'Apr', revenue: 4600, expenses: 2600 },
  { month: 'May', revenue: 6200, expenses: 3100 },
  { month: 'Jun', revenue: 5800, expenses: 2900 },
  { month: 'Jul', revenue: 7200, expenses: 3400 },
  { month: 'Aug', revenue: 6800, expenses: 3200 },
  { month: 'Sep', revenue: 7500, expenses: 3600 },
  { month: 'Oct', revenue: 8100, expenses: 3800 },
  { month: 'Nov', revenue: 7900, expenses: 3700 },
  { month: 'Dec', revenue: 9200, expenses: 4200 },
];

export function RevenueChart() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-900">Revenue Overview</CardTitle>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-sm">
              12 Months
            </button>
            <button className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-sm hover:bg-slate-200 transition-colors">
              6 Months
            </button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="month" 
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#94a3b8"
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#6366f1" 
                strokeWidth={2}
                fill="url(#colorRevenue)" 
              />
              <Area 
                type="monotone" 
                dataKey="expenses" 
                stroke="#94a3b8" 
                strokeWidth={2}
                fill="url(#colorExpenses)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
            <span className="text-sm text-slate-600">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-400"></div>
            <span className="text-sm text-slate-600">Expenses</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
