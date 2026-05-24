import { memo } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Historico = memo(() => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Histórico
    </Typography>
    <Typography>
      Esta es la sección de Histórico. Aquí puedes revisar los cambios anteriores.
    </Typography>
  </Box>
))

export default Historico
