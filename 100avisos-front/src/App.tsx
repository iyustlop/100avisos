import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdsList from './components/AdsList';
import AdForm from './components/AdForm';
import NavButtons from './components/NavButtons';
import LoginForm from './components/LoginForm';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import './App.css';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, []);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            100 Avisos
          </Typography>
          {token ? <NavButtons /> : null}
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: 4 }}>
        {!token ? (
          <LoginForm onLoginSuccess={() => setToken(localStorage.getItem('token'))} />
        ) : (
          <Routes>
            <Route path="/" element={<AdsList />} />
            <Route path="/create" element={<AdForm />} />
          </Routes>
        )}
      </Box>
    </Router>
  );
};

export default App;
