import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItemButton, ListItemIcon, ListItemText, Paper, Box, Typography } from '@mui/material'

const menuItems = [
  { label: 'Home', path: '/', icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15C14.4477 21 14 20.5523 14 20V15H10V20C10 20.5523 9.55228 21 9 21H4C3.44772 21 3 20.5523 3 20V10.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) },
  { label: 'Tipos', path: '/tipos' },
  { label: 'Recursos', path: '/recursos' },
  { label: 'Estados', path: '/estados' },
  { label: 'Historico', path: '/historico' },
]

const LateralMenu: React.FC = () => (
  <Paper elevation={2} sx={{ width: 220, p: 2 }}>
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Menú</Typography>
    </Box>
    <List>
      {menuItems.map((item) => (
        <ListItemButton key={item.label} component={Link} to={item.path} aria-label={item.label}>
          {item.icon ? <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon> : null}
          {item.label !== 'Home' ? <ListItemText primary={item.label} /> : null}
        </ListItemButton>
      ))}
    </List>
  </Paper>
)

export default LateralMenu
