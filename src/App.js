import { useState, useCallback } from 'react';
import Particles from 'react-particles';
import { loadAll } from '@tsparticles/all';
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

  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'],
      },
      shape: {
        type: ['circle', 'star'],
        stroke: {
          width: 1,
          color: '#ffffff',
          opacity: 0.3,
        },
      },
      opacity: {
        value: { min: 0.2, max: 0.8 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: { min: 1, max: 3 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'out',
        },
        parallax: {
          enable: true,
          force: 20,
          smooth: 10,
        },
      },
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: ['trail', 'grab'],
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        trail: {
          delay: 0.005,
          quantity: 2,
        },
        grab: {
          distance: 200,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    background: {
      color: '#0f172a', // Tailwind slate-900
    },
    retina_detect: true,
  };

  return (
    <div className="min-h-screen relative">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10">
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
    </div>
  );
}

export default App;