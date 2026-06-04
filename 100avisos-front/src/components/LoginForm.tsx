import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { authService } from '../services/authService';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!usuario || !password) {
      setErrorMessage('Usuario y contraseña son obligatorios');
      return;
    }

    setLoading(true);

    if (isRegisterMode) {
      if (password !== confirmPassword) {
        setErrorMessage('Las contraseñas no coinciden');
        setLoading(false);
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

      setLoading(false);
      return;
    }

    try {
      await login(usuario, password);
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Error de inicio de sesión. Usuario o contraseña incorrectos.');
    } finally {
      setLoading(false);
    }
  };

  const toggleRegisterMode = () => {
    setIsRegisterMode(!isRegisterMode);
    setErrorMessage('');
    setSuccessMessage('');
    setConfirmPassword('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
      <TextField
        label="Usuario"
        placeholder="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        fullWidth
        size="medium"
        autoFocus
      />
      <TextField
        label="Password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        size="medium"
      />
      {isRegisterMode && (
        <TextField
          label="Confirmar contraseña"
          placeholder="repite password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          size="medium"
        />
      )}
      {errorMessage && (
        <Box sx={{ color: 'error.main', fontSize: '0.95rem' }}>{errorMessage}</Box>
      )}
      {successMessage && (
        <Box sx={{ color: 'success.main', fontSize: '0.95rem' }}>{successMessage}</Box>
      )}
      <Button variant="contained" color="primary" type="submit" size="large" disabled={loading}>
        {loading && (
          <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
        )}
        {isRegisterMode ? 'Crear cuenta' : 'Entrar'}
      </Button>
      <Button
        variant="text"
        onClick={toggleRegisterMode}
        sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
        size="small"
        disabled={loading}
      >
        {isRegisterMode ? 'Volver al login' : 'Crear usuario nuevo'}
      </Button>
    </Box>
  );
};

export default LoginForm;
