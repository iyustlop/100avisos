import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import NavButtons from './components/NavButtons';
import LoginForm from './components/LoginForm';
import LateralMenu from './components/LateralMenu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthProvider, useAuth } from './context/AuthContext';

const Tipos = lazy(() => import('./components/Tipos'));
const Recursos = lazy(() => import('./components/Recursos'));
const Estados = lazy(() => import('./components/Estados'));
const Historico = lazy(() => import('./components/Historico'));
const AdForm = lazy(() => import('./components/AdForm'));

const APPBAR_HEIGHT = 64;

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
    <Box sx={{ position: 'fixed', top: APPBAR_HEIGHT, left: 0, width: 240, px: 2, height: `calc(100vh - ${APPBAR_HEIGHT}px)`, overflowY: 'auto' }}>
      <LateralMenu />
    </Box>
    <Box sx={{ ml: '280px', flex: 1, p: 4 }}>{children}</Box>
  </Box>
)

const AppContent = () => {
  const { token } = useAuth();

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            100 Avisos
          </Typography>
          {token && <NavButtons />}
        </Toolbar>
      </AppBar>
      {!token ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)', padding: 4 }}>
          <LoginForm />
        </Box>
      ) : (
        <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}><CircularProgress /></Box>}>
          <Routes>
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/tipos" element={<MainLayout><Tipos /></MainLayout>} />
            <Route path="/recursos" element={<MainLayout><Recursos /></MainLayout>} />
            <Route path="/estados" element={<MainLayout><Estados /></MainLayout>} />
            <Route path="/historico" element={<MainLayout><Historico /></MainLayout>} />
            <Route path="/create" element={<MainLayout><AdForm /></MainLayout>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
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
