import { Bell, Search, Settings, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">D</span>
              </div>
              <span className="text-slate-900">Dashboard</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-slate-900 hover:text-indigo-600 transition-colors">
                Overview
              </a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Analytics
              </a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Reports
              </a>
              <a href="#" className="text-slate-600 hover:text-indigo-600 transition-colors">
                Settings
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input 
                type="search" 
                placeholder="Search..." 
                className="pl-9 w-64 bg-slate-50 border-slate-200"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-900">
              <Settings className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
