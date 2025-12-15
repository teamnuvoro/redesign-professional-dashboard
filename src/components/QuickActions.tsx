import { Plus, FileText, Users, Settings, Mail, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const actions = [
  { label: 'New Report', icon: FileText, color: 'from-blue-500 to-indigo-600' },
  { label: 'Add User', icon: Users, color: 'from-emerald-500 to-teal-600' },
  { label: 'Schedule', icon: Calendar, color: 'from-purple-500 to-pink-600' },
  { label: 'Send Email', icon: Mail, color: 'from-orange-500 to-red-600' },
];

export function QuickActions() {
  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="border-b border-slate-100">
        <CardTitle className="text-slate-900">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-sm transition-all group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm text-slate-700">{action.label}</span>
              </button>
            );
          })}
        </div>
        
        <Button className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Create New
        </Button>
      </CardContent>
    </Card>
  );
}
