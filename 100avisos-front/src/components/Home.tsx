import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AdsList from './AdsList'

const Home = () => (
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
