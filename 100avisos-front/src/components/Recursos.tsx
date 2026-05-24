import { memo } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Recursos = memo(() => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Recursos
    </Typography>
    <Typography>
      Esta es la sección de Recursos. Aquí puedes gestionar y consultar los recursos.
    </Typography>
  </Box>
))

export default Recursos
