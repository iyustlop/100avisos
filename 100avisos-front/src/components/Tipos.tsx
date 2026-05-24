import { memo } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Tipos = memo(() => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Tipos
    </Typography>
    <Typography>
      Esta es la sección de Tipos. Aquí puedes gestionar y ver los tipos disponibles.
    </Typography>
  </Box>
))

export default Tipos
