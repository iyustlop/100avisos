import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdsList from './components/AdsList';
import AdForm from './components/AdForm';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            100 Avisos
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Lista de Avisos
          </Button>
          <Button color="inherit" component={Link} to="/create">
            Crear Aviso
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<AdsList />} />
        <Route path="/create" element={<AdForm />} />
      </Routes>
    </Router>
  );
};

export default App;
