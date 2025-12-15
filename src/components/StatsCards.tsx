import { TrendingUp, Users, DollarSign, ShoppingCart, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const stats = [
  {
    label: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    label: 'Active Users',
    value: '2,345',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    label: 'Sales',
    value: '1,234',
    change: '-4.2%',
    trend: 'down',
    icon: ShoppingCart,
    color: 'from-purple-500 to-pink-600',
  },
  {
    label: 'Growth',
    value: '32.4%',
    change: '+8.1%',
    trend: 'up',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-600',
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-slate-600 mb-1">{stat.label}</p>
                  <p className="text-slate-900 mb-2">{stat.value}</p>
                  <div className="flex items-center gap-1">
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span className={`text-sm ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm text-slate-500">vs last month</span>
                  </div>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
