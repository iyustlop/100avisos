import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const NavButtons: React.FC = () => (
  <>
    <Button color="inherit" component={Link} to="/">
      Lista de Avisos
    </Button>
    <Button color="inherit" component={Link} to="/create">
      Crear Aviso
    </Button>
  </>
);

export default NavButtons;
