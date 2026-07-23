import { Play, CheckCircle2, Clock, Link2, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      name: 'Active Automations',
      value: '12',
      change: '+2 this week',
      changeType: 'positive',
      icon: Play,
      color: 'text-brand-teal bg-brand-teal/10',
    },
    {
      name: 'Tasks Completed',
      value: '1,248',
      change: '+142 today',
      changeType: 'positive',
      icon: CheckCircle2,
      color: 'text-brand-sky bg-brand-sky/10',
    },
    {
      name: 'Hours Saved',
      value: '34.5 hrs',
      change: '+6.2 hrs vs last week',
      changeType: 'positive',
      icon: Clock,
      color: 'text-brand-emerald bg-brand-emerald/10',
    },
    {
      name: 'Connected Tools',
      value: '3 / 5',
      change: '2 pending config',
      changeType: 'neutral',
      icon: Link2,
      color: 'text-brand-amber bg-brand-amber/10',
    },
  ];

  const recentActivities = [
    { id: 1, action: 'Invoice Nudge sent', detail: 'Reminded client at Acme Corp about Invoice #1024', time: '10 mins ago', type: 'automation' },
    { id: 2, action: 'Meeting scheduled', detail: 'Lead qualification call with Designco on Calendar', time: '1 hour ago', type: 'automation' },
    { id: 3, action: 'Email digested', detail: 'Extracted 3 action items from partner email thread', time: '3 hours ago', type: 'digest' },
    { id: 4, action: 'HubSpot Lead Sync', detail: 'Synced 12 new qualified leads from yesterday', time: '1 day ago', type: 'sync' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-brand-navy to-brand-navy/90 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg border border-brand-gray-200">
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-cover bg-center opacity-10 flex items-center justify-center">
          <Sparkles className="h-48 w-48 text-brand-teal" />
        </div>
        <div className="relative z-10 space-y-3 max-w-2xl">
          <span className="bg-brand-teal/20 text-brand-teal text-xs font-semibold px-3 py-1 rounded-full border border-brand-teal/30 inline-block uppercase tracking-wider">
            Enterprise Pro Active
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Welcome to FlowPilot AI</h1>
          <p className="text-brand-gray-200 text-base md:text-lg">
            Your proactive AI operations assistant is running smoothly. We've automated 42 background workflows and saved your business 3.5 hours of admin work today.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-brand-gray-200 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand-gray-500">{stat.name}</span>
                <div className={`p-2 rounded-lg ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-brand-gray-900 tracking-tight">{stat.value}</h3>
                <p className="mt-1 text-xs text-brand-gray-500 flex items-center gap-1">
                  <span className={`font-semibold ${stat.changeType === 'positive' ? 'text-brand-emerald' : 'text-brand-gray-600'}`}>
                    {stat.change}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Operations Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-gray-200 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-brand-gray-800">Recent Automated Operations</h3>
            <button className="text-sm text-brand-teal hover:text-brand-navy font-semibold flex items-center gap-1 transition-colors">
              View Activity Log <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="divide-y divide-brand-gray-200">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="py-4 flex items-start justify-between first:pt-0 last:pb-0">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-brand-gray-800">{activity.action}</p>
                  <p className="text-xs text-brand-gray-500">{activity.detail}</p>
                </div>
                <span className="text-xs text-brand-gray-400 font-medium whitespace-nowrap ml-4">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Summary Box */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-gray-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brand-navy">
              <Sparkles className="h-5 w-5 text-brand-teal" />
              <h3 className="font-bold text-lg text-brand-gray-800">AI Operations Brief</h3>
            </div>
            <p className="text-sm text-brand-gray-600 leading-relaxed">
              "We have detected 2 outstanding client invoices from last week that remain unpaid. FlowPilot is ready to draft polite payment reminders."
            </p>
            <div className="bg-brand-gray-50 border border-brand-gray-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-amber">
                <ShieldAlert className="h-4 w-4" /> Action Recommended
              </div>
              <p className="text-xs text-brand-gray-600">
                Remind ACME Corp of overdue Invoice #1024 ($4,250.00). Let FlowPilot handle the email.
              </p>
            </div>
          </div>
          <button className="mt-6 w-full py-2.5 px-4 bg-brand-teal hover:bg-brand-navy text-white font-semibold text-sm rounded-lg shadow-sm transition-colors duration-150">
            Approve Auto-Nudge
          </button>
        </div>
      </div>
    </div>
  );
}
