import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdsList from './components/AdsList';
import AdForm from './components/AdForm';
import Home from './components/Home';
import NavButtons from './components/NavButtons';
import LoginForm from './components/LoginForm';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

const AppContent: React.FC = () => {
  const { token } = useAuth();

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
          <LoginForm />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<AdForm />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </Box>
    </Router>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
