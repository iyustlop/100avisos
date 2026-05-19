import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Tipos from './components/Tipos';
import Recursos from './components/Recursos';
import Estados from './components/Estados';
import Historico from './components/Historico';
import AdForm from './components/AdForm';
import NavButtons from './components/NavButtons';
import LoginForm from './components/LoginForm';
import LateralMenu from './components/LateralMenu';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start', mt: '72px' }}>
    <Box sx={{ position: 'fixed', top: '72px', left: 0, width: 240, px: 2 }}>
      <LateralMenu />
    </Box>
    <Box sx={{ ml: '280px', flex: 1, p: 4 }}>{children}</Box>
  </Box>
)

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
      {!token ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)', padding: 4 }}>
          <LoginForm />
        </Box>
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/tipos" element={<MainLayout><Tipos /></MainLayout>} />
          <Route path="/recursos" element={<MainLayout><Recursos /></MainLayout>} />
          <Route path="/estados" element={<MainLayout><Estados /></MainLayout>} />
          <Route path="/historico" element={<MainLayout><Historico /></MainLayout>} />
          <Route path="/create" element={<MainLayout><AdForm /></MainLayout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </Router>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;
