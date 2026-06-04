import { memo } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15C14.4477 21 14 20.5523 14 20V15H10V20C10 20.5523 9.55228 21 9 21H4C3.44772 21 3 20.5523 3 20V10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TypesIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ResourcesIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 7C4 5.89543 4.89543 5 6 5H9L11 7H18C19.1046 7 20 7.89543 20 9V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StatesIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HistoryIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <polyline points="12,7 12,12 16,12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const menuItems = [
  { label: 'Home', path: '/', icon: HomeIcon },
  { label: 'Trayectos', path: '/trayectos', icon: TypesIcon },
  { label: 'Conductores', path: '/recursos', icon: ResourcesIcon },
  { label: 'Estados', path: '/estados', icon: StatesIcon },
  { label: 'Histórico', path: '/historico', icon: HistoryIcon },
] as const;

const LateralMenu = memo(() => (
  <Paper elevation={2} sx={{ width: 220, p: 2 }}>
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Menú</Typography>
    </Box>
    <List>
      {menuItems.map((item) => (
        <ListItemButton key={item.label} component={Link} to={item.path} aria-label={item.label}>
          <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </List>
  </Paper>
));

export default LateralMenu;
