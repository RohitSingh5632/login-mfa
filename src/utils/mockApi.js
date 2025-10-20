export const mockApi = {
    async login(email, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === 'user@example.com' && password === 'Password123!') {
            resolve({ userId: '123', role: 'read-write', mfaToken: 'mock-token' });
          } else if (email === 'readonly@example.com' && password === 'Password123!') {
            resolve({ userId: '124', role: 'read-only', mfaToken: 'mock-token' });
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 1000);
      });
    },
    async verifyMFA(token, code) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (token === 'mock-token' && code === '123456') {
            resolve({ success: true });
          } else {
            reject(new Error('Invalid MFA code'));
          }
        }, 1000);
      });
    },
    async signup(email, password) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ success: true });
        }, 1000);
      });
    },
  };