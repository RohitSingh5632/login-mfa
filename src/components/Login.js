import { useState } from 'react';
import { mockApi } from '../utils/mockApi';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Login({ onLoginSuccess, setScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    setIsLoading(true);
    try {
      const response = await mockApi.login(email, password);
      setIsLoading(false);
      onLoginSuccess(response);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-500 ease-in-out animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 font-sans">Welcome</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-600 mb-2">Email</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400 transition">
              <span className="pl-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border-none rounded-lg focus:ring-0 focus:outline-none"
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400 transition">
              <span className="pl-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zm0 4c-1.1 0-2-.9-2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zm0 4c-1.1 0-2-.9-2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zm4 5v2c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2z"></path>
                </svg>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border-none rounded-lg focus:ring-0 focus:outline-none"
                placeholder="Enter your password"
                disabled={isLoading}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded-lg">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={() => setScreen('signup')}
            className="text-blue-600 hover:text-blue-800 hover:underline transition"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;