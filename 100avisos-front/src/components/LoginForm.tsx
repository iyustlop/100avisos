import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { authService } from '../services/authService';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async () => {
    setErrorMessage('');
    setSuccessMessage('');

    if (!usuario || !password) {
      setErrorMessage('Usuario y contraseña son obligatorios');
      return;
    }

    if (isRegisterMode) {
      if (password !== confirmPassword) {
        setErrorMessage('Las contraseñas no coinciden');
        return;
      }

      try {
        await authService.register(usuario, password);
        setSuccessMessage('Usuario creado correctamente. Ya puedes iniciar sesión.');
        setIsRegisterMode(false);
        setConfirmPassword('');
      } catch (error) {
        console.error('Registro error:', error);
        setErrorMessage('Error al crear el usuario. Comprueba los datos e inténtalo de nuevo.');
      }

      return;
    }

    try {
      await authService.login(usuario, password);
      onLoginSuccess();
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Error de inicio de sesión. Usuario o contraseña incorrectos.');
    }
  };

  const toggleRegisterMode = () => {
    setIsRegisterMode(!isRegisterMode);
    setErrorMessage('');
    setSuccessMessage('');
    setConfirmPassword('');
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
      {isRegisterMode && (
        <TextField
          label="Confirmar contraseña"
          placeholder="repite password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          size="large"
        />
      )}
      {errorMessage && (
        <Box sx={{ color: 'error.main', fontSize: '0.95rem' }}>{errorMessage}</Box>
      )}
      {successMessage && (
        <Box sx={{ color: 'success.main', fontSize: '0.95rem' }}>{successMessage}</Box>
      )}
      <Button variant="contained" color="primary" onClick={handleSubmit} size="large">
        {isRegisterMode ? 'Crear cuenta' : 'Entrar'}
      </Button>
      <Button
        variant="text"
        onClick={toggleRegisterMode}
        sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
        size="small"
      >
        {isRegisterMode ? 'Volver al login' : 'Crear usuario nuevo'}
      </Button>
    </Box>
  );
};

export default LoginForm;
