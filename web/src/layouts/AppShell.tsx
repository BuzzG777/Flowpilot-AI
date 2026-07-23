import { Link, useLocation, Outlet } from 'react-router-dom';
import { LayoutDashboard, Cable, Settings, User, LogOut, Activity } from 'lucide-react';

export default function AppShell() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Integrations', path: '/integrations', icon: Cable },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex h-screen bg-brand-gray-50 text-brand-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-navy text-white flex flex-col justify-between border-r border-brand-gray-200">
        <div>
          {/* Logo / Brand Header */}
          <div className="p-6 flex items-center gap-3 border-b border-white/10">
            <div className="bg-brand-teal p-2 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight text-white">FlowPilot AI</h1>
              <p className="text-xs text-brand-sky">Ops Assistant</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 px-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-brand-teal text-white shadow-md'
                      : 'text-brand-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand-teal flex items-center justify-center font-bold text-white shadow-inner">
                FU
              </div>
              <div>
                <p className="text-sm font-medium text-white">FlowPilot User</p>
                <p className="text-xs text-brand-gray-400">user@flowpilot.ai</p>
              </div>
            </div>
            <Link
              to="/login"
              className="p-2 text-brand-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Side */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TopBar */}
        <header className="h-16 bg-white border-b border-brand-gray-200 flex items-center justify-between px-8">
          <div>
            <h2 className="text-lg font-semibold text-brand-gray-800">
              {navItems.find((item) => isActive(item.path))?.name || 'Dashboard'}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-brand-emerald/10 text-brand-emerald font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-brand-emerald animate-pulse"></span>
              AI Active
            </span>
            <div className="h-10 w-10 rounded-full bg-brand-gray-100 border border-brand-gray-200 flex items-center justify-center text-brand-gray-600 hover:bg-brand-gray-200 transition-colors cursor-pointer">
              <User className="h-5 w-5" />
            </div>
          </div>
        </header>

        {/* Page Content area */}
        <main className="flex-1 overflow-y-auto p-8 bg-brand-gray-50">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
