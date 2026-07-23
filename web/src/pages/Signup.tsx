import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Shield, ArrowRight } from 'lucide-react';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Non-functional placeholder: redirect to dashboard
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-brand-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="bg-brand-navy p-3 rounded-2xl flex items-center justify-center shadow-md">
            <Activity className="h-8 w-8 text-brand-teal" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-navy">
          Create your FlowPilot AI account
        </h2>
        <p className="mt-2 text-center text-sm text-brand-gray-500">
          Or{' '}
          <Link to="/login" className="font-semibold text-brand-teal hover:text-brand-navy transition-colors">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-brand-gray-200">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-brand-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  className="appearance-none block w-full px-3 py-2 border border-brand-gray-300 rounded-md shadow-sm placeholder-brand-gray-400 focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@company.com"
                  className="appearance-none block w-full px-3 py-2 border border-brand-gray-300 rounded-md shadow-sm placeholder-brand-gray-400 focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-brand-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="appearance-none block w-full px-3 py-2 border border-brand-gray-300 rounded-md shadow-sm placeholder-brand-gray-400 focus:outline-none focus:ring-brand-teal focus:border-brand-teal sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-brand-teal focus:ring-brand-teal border-brand-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-brand-gray-500">
                I agree to the{' '}
                <a href="#" className="font-semibold text-brand-teal hover:text-brand-navy transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-semibold text-brand-teal hover:text-brand-navy transition-colors">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-brand-teal hover:bg-brand-navy focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal transition-all flex items-center gap-2"
              >
                Start 14-day Free Trial <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="mt-6 border-t border-brand-gray-200 pt-6">
            <div className="flex items-center gap-2 text-xs text-brand-gray-500 justify-center">
              <Shield className="h-4 w-4 text-brand-emerald" /> Secured, end-to-end encrypted connection.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
