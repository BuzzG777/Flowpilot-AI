import { useEffect, useState } from 'react';
import { Mail, Calendar, DollarSign, Users, CheckSquare, Loader2, Link2, Check } from 'lucide-react';

interface Integration {
  id: string;
  type: string;
  status: string;
}

export default function Integrations() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [connectingId, setConnectingId] = useState<string | null>(null);

  // Fetch from our Express server on mount
  useEffect(() => {
    fetch('/api/integrations')
      .then((res) => res.json())
      .then((data) => {
        setIntegrations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch integrations:', err);
        // Fallback mock states if server is not available immediately
        setIntegrations([
          { id: "gmail", type: "Gmail", status: "disconnected" },
          { id: "calendar", type: "Calendar", status: "disconnected" },
          { id: "quickbooks", type: "QuickBooks", status: "disconnected" },
          { id: "hubspot", type: "HubSpot", status: "disconnected" },
          { id: "asana", type: "Asana", status: "disconnected" }
        ]);
        setLoading(false);
      });
  }, []);

  const handleConnect = async (id: string) => {
    setConnectingId(id);
    try {
      const response = await fetch(`/api/integrations/${id}/connect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      await response.json();
      
      // Update local state to show it connected
      setIntegrations(prev =>
        prev.map(item =>
          item.id === id ? { ...item, status: 'connected' } : item
        )
      );
    } catch (err) {
      console.error('Failed to connect:', err);
    } finally {
      setConnectingId(null);
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'gmail':
        return { icon: Mail, bg: 'bg-red-50 text-red-600 border-red-100', color: '#EA4335' };
      case 'calendar':
        return { icon: Calendar, bg: 'bg-blue-50 text-blue-600 border-blue-100', color: '#4285F4' };
      case 'quickbooks':
        return { icon: DollarSign, bg: 'bg-green-50 text-green-600 border-green-100', color: '#2CA01C' };
      case 'hubspot':
        return { icon: Users, bg: 'bg-orange-50 text-orange-600 border-orange-100', color: '#FF7A59' };
      case 'asana':
        return { icon: CheckSquare, bg: 'bg-rose-50 text-rose-600 border-rose-100', color: '#FC636B' };
      default:
        return { icon: Link2, bg: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20', color: '#0D9488' };
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-brand-gray-200 pb-5">
        <h3 className="text-2xl font-bold leading-6 text-brand-gray-900">App Integrations</h3>
        <p className="mt-2 text-sm text-brand-gray-500">
          Connect your existing business stack. FlowPilot AI operates background tasks by securely connecting to these APIs.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-24 space-y-4">
          <Loader2 className="h-10 w-10 text-brand-teal animate-spin" />
          <p className="text-sm font-semibold text-brand-gray-500">Loading your integrations list...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item) => {
            const { icon: Icon, bg } = getIcon(item.id);
            const isConnected = item.status === 'connected';
            const isConnecting = connectingId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm border border-brand-gray-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl border ${bg} flex items-center justify-center`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${
                        isConnected
                          ? 'bg-brand-emerald/10 text-brand-emerald'
                          : 'bg-brand-gray-100 text-brand-gray-500'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${isConnected ? 'bg-brand-emerald animate-pulse' : 'bg-brand-gray-400'}`}></span>
                      {isConnected ? 'Connected' : 'Disconnected'}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-brand-gray-900">{item.type}</h4>
                    <p className="mt-1 text-sm text-brand-gray-500">
                      {item.id === 'gmail' && 'Read emails to summarize daily briefing and capture operational actions.'}
                      {item.id === 'calendar' && 'Check schedules, qualify and book client introductory calls autonomously.'}
                      {item.id === 'quickbooks' && 'Inspect accounts receivable, discover unpaid bills, and draft reminder nudges.'}
                      {item.id === 'hubspot' && 'Sync leads, manage CRM operations, and automatically follow up with cold targets.'}
                      {item.id === 'asana' && 'Create operational task boards and track action item tickets to completion.'}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-gray-100">
                  {isConnected ? (
                    <button
                      disabled
                      className="w-full py-2 px-4 bg-brand-gray-50 text-brand-gray-500 font-semibold text-sm rounded-lg border border-brand-gray-200 flex items-center justify-center gap-1.5 cursor-not-allowed"
                    >
                      <Check className="h-4 w-4 text-brand-emerald" /> Linked & Authorized
                    </button>
                  ) : (
                    <button
                      disabled={isConnecting}
                      onClick={() => handleConnect(item.id)}
                      className="w-full py-2 px-4 bg-brand-navy hover:bg-brand-teal text-white font-bold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      {isConnecting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Connecting...
                        </>
                      ) : (
                        <>
                          Connect {item.type}
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
