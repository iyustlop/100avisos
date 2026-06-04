import { memo } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuth } from '../context/AuthContext';

const NavButtons = memo(() => {
  const { user, logout } = useAuth();

  return (
    <>
      <Typography variant="body2" sx={{ mr: 1, color: 'inherit' }}>
        {user ? `Hola, ${user}` : ''}
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Lista de Avisos
      </Button>
      <Button color="inherit" component={Link} to="/create">
        Crear Aviso
      </Button>
      <Button color="inherit" onClick={logout}>
        Cerrar sesión
      </Button>
    </>
  );
});

export default NavButtons;
