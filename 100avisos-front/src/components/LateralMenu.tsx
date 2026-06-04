import { memo } from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { HomeIcon, TypesIcon, ResourcesIcon, StatesIcon, HistoryIcon } from './Icons';

const menuItems = [
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'Trayectos', path: '/trayectos', icon: <TypesIcon /> },
  { label: 'Conductores', path: '/recursos', icon: <ResourcesIcon /> },
  { label: 'Estados', path: '/estados', icon: <StatesIcon /> },
  { label: 'Histórico', path: '/historico', icon: <HistoryIcon /> },
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
