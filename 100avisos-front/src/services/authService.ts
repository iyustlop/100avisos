const API_BASE_URL = 'http://localhost:4000';

export const authService = {
  async login(usuario: string, password: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario,
        password: btoa(password),
      }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const responseData = await response.json();
    const token = response.headers.get('token') || responseData.token;
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', usuario);
    } else {
      throw new Error('No token received');
    }
  },

  async register(usuario: string, password: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/api/auth/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usuario,
        password: btoa(password),
      }),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Registration failed');
    }
  },
};
