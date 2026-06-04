import { memo } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Estados = memo(() => (
  <Box>
    <Typography variant="h4" gutterBottom>
      Estados
    </Typography>
    <Typography>
      Esta es la sección de Estados. Aquí puedes revisar el estado actual de los avisos.
    </Typography>
  </Box>
))

export default Estados
