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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-500 ease-in-out animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6 font-sans">MFA Verification</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter the 6-digit code sent to your email (use 123456 for demo)
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label className="block text-sm font-medium text-gray-600 mb-2">MFA Code</label>
            <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400 transition">
              <span className="pl-3 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 3c-2.872 0-5.532 1.012-7.618 2.984M12 21a9 9 0 01-9-9c0-4.97 4.03-9 9-9s9 4.03 9 9a9 9 0 01-9 9zm0-18c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"></path>
                </svg>
              </span>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full p-3 border-none rounded-lg focus:ring-0 focus:outline-none"
                placeholder="Enter MFA code"
                maxLength="6"
                disabled={isLoading}
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded-lg">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg hover:from-blue-700 hover:to inductive-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify'}
          </button>
        </form>
        <button
          onClick={() => setScreen('login')}
          className="mt-4 text-blue-600 hover:text-blue-800 hover:underline transition text-center w-full"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}

export default MFA;