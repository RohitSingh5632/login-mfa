import { useState } from 'react';
import { mockApi } from '../utils/mockApi';

function MFA({ mfaToken, onMFASuccess, setScreen }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (code.length !== 6 || !/^\d+$/.test(code)) {
      setError('MFA code must be 6 digits');
      return;
    }
    setIsLoading(true);
    try {
      await mockApi.verifyMFA(mfaToken, code);
      setIsLoading(false);
      onMFASuccess();
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Artistic Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-25 animate-float-medium"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-red-400 to-pink-500 rounded-full opacity-15 animate-float-fast"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-float-slow"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-32 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-amber-400 opacity-30 animate-rotate-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-orange-400 opacity-25 animate-rotate-medium"></div>
        
        {/* Floating Squares */}
        <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 opacity-20 transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-15 transform rotate-12 animate-pulse-medium"></div>
        
        {/* Particle Effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-amber-300 rounded-full opacity-50 animate-twinkle-delayed"></div>
        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-orange-300 rounded-full opacity-30 animate-twinkle-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-red-300 rounded-full opacity-45 animate-twinkle-medium"></div>
        
        {/* Wave Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-800/30 to-transparent animate-wave"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-600/20 to-transparent rounded-full animate-wave-reverse"></div>
      </div>
      
      {/* Main MFA Card */}
      <div className="relative z-10 max-w-md w-full p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-500 ease-in-out animate-fade-in">
        <h2 className="text-3xl font-bold text-white text-center mb-6 font-sans drop-shadow-lg">MFA Verification</h2>
        <p className="text-sm text-white/80 mb-6 text-center drop-shadow-sm">
          Enter the 6-digit code sent to your email (use 123456 for demo)
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-white/90 mb-2 drop-shadow-sm">MFA Code</label>
            <div className="flex items-center bg-white/20 border border-white/30 rounded-lg focus-within:ring-2 focus-within:ring-white/50 transition backdrop-blur-sm">
              <span className="pl-3 text-white/70">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 3c-2.872 0-5.532 1.012-7.618 2.984M12 21a9 9 0 01-9-9c0-4.97 4.03-9 9-9s9 4.03 9 9a9 9 0 01-9 9zm0-18c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"></path>
                </svg>
              </span>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full p-3 bg-transparent border-none rounded-lg focus:ring-0 focus:outline-none text-white placeholder-white/60"
                placeholder="Enter MFA code"
                maxLength="6"
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
            {isLoading ? 'Verifying...' : 'Verify'}
          </button>
        </form>
        <button
          onClick={() => setScreen('login')}
          className="mt-4 text-amber-300 hover:text-amber-200 hover:underline transition text-center w-full drop-shadow-sm"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default MFA;