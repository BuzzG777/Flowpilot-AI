import { User, Bell, Key, CreditCard, Save } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="border-b border-brand-gray-200 pb-5">
        <h3 className="text-2xl font-bold leading-6 text-brand-gray-900">Settings</h3>
        <p className="mt-2 text-sm text-brand-gray-500">
          Manage your FlowPilot AI configurations, user preferences, and billing details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Navigation Sidebar */}
        <div className="space-y-1">
          <a href="#" className="bg-brand-gray-100 text-brand-teal group flex items-center px-3 py-2 text-sm font-semibold rounded-lg">
            <User className="text-brand-teal mr-3 h-5 w-5 flex-shrink-0" />
            Profile Settings
          </a>
          <a href="#" className="text-brand-gray-600 hover:bg-brand-gray-100 hover:text-brand-gray-900 group flex items-center px-3 py-2 text-sm font-semibold rounded-lg transition-colors">
            <Bell className="text-brand-gray-400 group-hover:text-brand-gray-500 mr-3 h-5 w-5 flex-shrink-0" />
            Notification Rules
          </a>
          <a href="#" className="text-brand-gray-600 hover:bg-brand-gray-100 hover:text-brand-gray-900 group flex items-center px-3 py-2 text-sm font-semibold rounded-lg transition-colors">
            <Key className="text-brand-gray-400 group-hover:text-brand-gray-500 mr-3 h-5 w-5 flex-shrink-0" />
            API Credentials
          </a>
          <a href="#" className="text-brand-gray-600 hover:bg-brand-gray-100 hover:text-brand-gray-900 group flex items-center px-3 py-2 text-sm font-semibold rounded-lg transition-colors">
            <CreditCard className="text-brand-gray-400 group-hover:text-brand-gray-500 mr-3 h-5 w-5 flex-shrink-0" />
            Subscription & Plan
          </a>
        </div>

        {/* Configurations Form Panel */}
        <div className="md:col-span-3 space-y-6">
          <div className="bg-white shadow sm:rounded-xl border border-brand-gray-200 overflow-hidden">
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-brand-gray-900 border-b border-brand-gray-100 pb-3">AI Behavior Settings</h4>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="auto_nudge"
                        name="auto_nudge"
                        type="checkbox"
                        defaultChecked
                        className="focus:ring-brand-teal h-4 w-4 text-brand-teal border-brand-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="auto_nudge" className="font-semibold text-brand-gray-800">Proactive Client Reminders</label>
                      <p className="text-brand-gray-500">Draft invoice reminders automatically and present them for approval in your daily briefing.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="email_digests"
                        name="email_digests"
                        type="checkbox"
                        defaultChecked
                        className="focus:ring-brand-teal h-4 w-4 text-brand-teal border-brand-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="email_digests" className="font-semibold text-brand-gray-800">Email Action-Item Extraction</label>
                      <p className="text-brand-gray-500">Automatically parse incoming client emails to identify scheduling opportunities and action items.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="strict_approval"
                        name="strict_approval"
                        type="checkbox"
                        defaultChecked
                        className="focus:ring-brand-teal h-4 w-4 text-brand-teal border-brand-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="strict_approval" className="font-semibold text-brand-gray-800">Require Manual Approval</label>
                      <p className="text-brand-gray-500">Never perform any external API mutation (sending email, booking calendar, syncing CRM) without your direct approval.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-brand-gray-900 border-b border-brand-gray-100 pb-3">Briefing Frequency</h4>
                <div className="mt-4">
                  <label htmlFor="briefing_time" className="block text-sm font-semibold text-brand-gray-700">Daily Operations Briefing Time</label>
                  <select
                    id="briefing_time"
                    name="briefing_time"
                    defaultValue="08:00"
                    className="mt-1 block w-full max-w-xs pl-3 pr-10 py-2 text-base border border-brand-gray-300 focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm rounded-md"
                  >
                    <option value="07:00">7:00 AM</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 bg-brand-gray-50 border-t border-brand-gray-100 flex justify-end">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-bold rounded-md shadow-sm text-white bg-brand-teal hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-colors"
              >
                <Save className="h-4 w-4" /> Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
