import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { authService } from '../services/authService';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!usuario || !password) return;

    try {
      await authService.login(usuario, password);
      onLoginSuccess();
    } catch (error) {
      console.error('Login error:', error);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
      <TextField
        label="Usuario"
        placeholder="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        fullWidth
        size="large"
      />
      <TextField
        label="Password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        size="large"
      />
      <Button variant="contained" color="primary" onClick={handleLogin} size="large">
        Entrar
      </Button>
    </Box>
  );
};

export default LoginForm;
