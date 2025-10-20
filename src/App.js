import { useState } from 'react';
import Login from './components/Login';
import MFA from './components/MFA';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import { mockApi } from './utils/mockApi';

function App() {
  const [screen, setScreen] = useState('login');
  const [user, setUser] = useState(null);
  const [mfaToken, setMfaToken] = useState(null);

  const handleLoginSuccess = (response) => {
    setMfaToken(response.mfaToken);
    setUser({ userId: response.userId, role: response.role });
    setScreen('mfa');
  };

  const handleMFASuccess = () => {
    setScreen('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setMfaToken(null);
    setScreen('login');
  };


  return (
    <div className="min-h-screen">
      {screen === 'login' && (
        <Login onLoginSuccess={handleLoginSuccess} setScreen={setScreen} />
      )}
      {screen === 'mfa' && (
        <MFA
          mfaToken={mfaToken}
          onMFASuccess={handleMFASuccess}
          setScreen={setScreen}
        />
      )}
      {screen === 'signup' && <Signup setScreen={setScreen} />}
      {screen === 'dashboard' && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;