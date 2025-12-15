import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Clock, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'Sarah Johnson',
    action: 'completed a new sale',
    amount: '$2,450',
    time: '5 minutes ago',
    status: 'success',
    avatar: 'SJ',
  },
  {
    id: 2,
    user: 'Michael Chen',
    action: 'uploaded quarterly report',
    amount: 'Q4 2024',
    time: '23 minutes ago',
    status: 'info',
    avatar: 'MC',
  },
  {
    id: 3,
    user: 'Emma Wilson',
    action: 'flagged an issue',
    amount: 'Payment delayed',
    time: '1 hour ago',
    status: 'warning',
    avatar: 'EW',
  },
  {
    id: 4,
    user: 'David Martinez',
    action: 'canceled subscription',
    amount: 'Premium plan',
    time: '2 hours ago',
    status: 'error',
    avatar: 'DM',
  },
  {
    id: 5,
    user: 'Lisa Anderson',
    action: 'added new team member',
    amount: 'John Doe',
    time: '3 hours ago',
    status: 'success',
    avatar: 'LA',
  },
];

const statusConfig = {
  success: { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  warning: { icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-50' },
  error: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50' },
  info: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
};

export function RecentActivity() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-slate-900">Recent Activity</CardTitle>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">
            View all
          </button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {activities.map((activity) => {
            const StatusIcon = statusConfig[activity.status as keyof typeof statusConfig].icon;
            const statusColor = statusConfig[activity.status as keyof typeof statusConfig].color;
            const statusBg = statusConfig[activity.status as keyof typeof statusConfig].bg;
            
            return (
              <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    {activity.avatar}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-slate-900">
                        {activity.user}
                      </p>
                      <p className="text-slate-600 mt-0.5">
                        {activity.action}
                      </p>
                    </div>
                    <div className={`p-1.5 rounded-lg ${statusBg}`}>
                      <StatusIcon className={`h-4 w-4 ${statusColor}`} />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs">
                      {activity.amount}
                    </span>
                    <span className="text-xs text-slate-500">{activity.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
