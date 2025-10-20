import { useState } from 'react';
import { mockApi } from '../utils/mockApi';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Signup({ setScreen }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
      await mockApi.signup(email, password);
      setIsLoading(false);
      setSuccess(true);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Artistic Background with Multiple Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0">
          {/* Floating Circles */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full opacity-25 animate-float-medium"></div>
          <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-15 animate-float-fast"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float-slow"></div>
          
          {/* Floating Triangles */}
          <div className="absolute top-32 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-emerald-400 opacity-30 animate-rotate-slow"></div>
          <div className="absolute bottom-40 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-teal-400 opacity-25 animate-rotate-medium"></div>
          
          {/* Floating Squares */}
          <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 transform rotate-45 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-15 transform rotate-12 animate-pulse-medium"></div>
          
          {/* Particle Effects */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-twinkle"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-300 rounded-full opacity-50 animate-twinkle-delayed"></div>
          <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-teal-300 rounded-full opacity-30 animate-twinkle-slow"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-300 rounded-full opacity-45 animate-twinkle-medium"></div>
          
          {/* Wave Patterns */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-800/30 to-transparent animate-wave"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-600/20 to-transparent rounded-full animate-wave-reverse"></div>
        </div>
        
        {/* Success Card */}
        <div className="relative z-10 max-w-md w-full p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-500 ease-in-out animate-fade-in">
          <h2 className="text-3xl font-bold text-white text-center mb-6 font-sans drop-shadow-lg">Signup Successful</h2>
          <p className="text-white/80 mb-6 text-center drop-shadow-sm">
            Your account has been created. Please log in.
          </p>
          <button
            onClick={() => setScreen('login')}
            className="w-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg text-white p-3 rounded-lg border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Artistic Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full opacity-25 animate-float-medium"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-15 animate-float-fast"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-float-slow"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-32 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-emerald-400 opacity-30 animate-rotate-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-teal-400 opacity-25 animate-rotate-medium"></div>
        
        {/* Floating Squares */}
        <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-15 transform rotate-12 animate-pulse-medium"></div>
        
        {/* Particle Effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-300 rounded-full opacity-50 animate-twinkle-delayed"></div>
        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-teal-300 rounded-full opacity-30 animate-twinkle-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-cyan-300 rounded-full opacity-45 animate-twinkle-medium"></div>
        
        {/* Wave Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-teal-800/30 to-transparent animate-wave"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-600/20 to-transparent rounded-full animate-wave-reverse"></div>
      </div>
      
      {/* Main Signup Card */}
      <div className="relative z-10 max-w-md w-full p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-500 ease-in-out animate-fade-in">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-sans drop-shadow-lg">Create Account</h2>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zm0 4c-1.1 0-2-.9-2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zm0 4c-1.1 0-2-.9-2-2V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2zm4 5v2c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2z"></path>
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
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
        <button
          onClick={() => setScreen('login')}
          className="mt-4 text-cyan-300 hover:text-cyan-200 hover:underline transition text-center w-full drop-shadow-sm"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default Signup;