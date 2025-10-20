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
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Artistic Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-25 animate-float-medium"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 animate-float-fast"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-green-400 to-teal-500 rounded-full opacity-20 animate-float-slow"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-32 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-purple-400 opacity-30 animate-rotate-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-cyan-400 opacity-25 animate-rotate-medium"></div>
        
        {/* Floating Squares */}
        <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 opacity-20 transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-15 transform rotate-12 animate-pulse-medium"></div>
        
        {/* Particle Effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-300 rounded-full opacity-50 animate-twinkle-delayed"></div>
        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-yellow-300 rounded-full opacity-30 animate-twinkle-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-300 rounded-full opacity-45 animate-twinkle-medium"></div>
        
        {/* Wave Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-800/30 to-transparent animate-wave"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-600/20 to-transparent rounded-full animate-wave-reverse"></div>
      </div>
      
      {/* Main Login Card */}
      <div className="relative z-10 max-w-md w-full p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-500 ease-in-out animate-fade-in">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-sans drop-shadow-lg">Welcome</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-white/90 mb-2 drop-shadow-sm">Email</label>
            <div className="flex items-center bg-white/20 border border-white/30 rounded-lg focus-within:ring-2 focus-within:ring-white/50 transition backdrop-blur-sm">
              <span className="pl-3 text-white/70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-transparent border-none rounded-lg focus:ring-0 focus:outline-none text-white placeholder-white/60"
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
          </div>
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-white/90 mb-2 drop-shadow-sm">Password</label>
            <div className="flex items-center bg-white/20 border border-white/30 rounded-lg focus-within:ring-2 focus-within:ring-white/50 transition backdrop-blur-sm">
              <span className="pl-3 text-white/70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-transparent border-none rounded-lg focus:ring-0 focus:outline-none text-white placeholder-white/60"
                placeholder="Enter your password"
                disabled={isLoading}
              />
            </div>
          </div>
          {error && <p className="text-red-200 text-sm mb-4 bg-red-500/20 backdrop-blur-sm border border-red-400/30 p-3 rounded-lg">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg text-white p-3 rounded-lg border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-white/80">
          Don't have an account?{' '}
          <button
            onClick={() => setScreen('signup')}
            className="text-cyan-300 hover:text-cyan-200 hover:underline transition drop-shadow-sm"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;