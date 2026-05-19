import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import AdsList from './AdsList'

const Home: React.FC = () => (
  <Container>
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenido a 100 Avisos
      </Typography>
      <Typography variant="body1">
        Has iniciado sesión correctamente. Aquí puedes ver los avisos disponibles.
      </Typography>
    </Box>
    <AdsList />
  </Container>
)

export default Home
