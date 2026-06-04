import { memo, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface Trayecto {
  id: number;
  salida: string;
  fechaSalida: string;
  llegada: string;
  fechaLlegada: string;
}

const initialTrayectos: Trayecto[] = [
  {
    id: 1,
    salida: 'Madrid',
    fechaSalida: '2026-06-10 08:00',
    llegada: 'Barcelona',
    fechaLlegada: '2026-06-10 14:30',
  },
  {
    id: 2,
    salida: 'Valencia',
    fechaSalida: '2026-06-12 09:15',
    llegada: 'Sevilla',
    fechaLlegada: '2026-06-12 17:45',
  },
  {
    id: 3,
    salida: 'Bilbao',
    fechaSalida: '2026-06-15 06:00',
    llegada: 'Málaga',
    fechaLlegada: '2026-06-15 15:20',
  },
];

const Trayectos = memo(() => {
  const [trayectos, setTrayectos] = useState<Trayecto[]>(initialTrayectos);

  const handleEdit = (id: number) => {
    console.log('Editar trayecto con id:', id);
  };

  const handleDelete = (id: number) => {
    setTrayectos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Trayectos
      </Typography>
      <Typography sx={{ mb: 3 }}>
        Esta es la sección de Trayectos. Aquí puedes gestionar y ver los trayectos disponibles.
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Salida</TableCell>
              <TableCell>Fecha salida</TableCell>
              <TableCell>Llegada</TableCell>
              <TableCell>Fecha llegada</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trayectos.map((trayecto) => (
              <TableRow key={trayecto.id}>
                <TableCell>{trayecto.salida}</TableCell>
                <TableCell>{trayecto.fechaSalida}</TableCell>
                <TableCell>{trayecto.llegada}</TableCell>
                <TableCell>{trayecto.fechaLlegada}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleEdit(trayecto.id)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(trayecto.id)}
                    >
                      Borrar
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
});

export default Trayectos;
