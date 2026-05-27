import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import type { Ad } from '../types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const API_URL = '/api/ads';

const fetcher = async (url: string): Promise<Ad[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('No se pudieron cargar los avisos.');
  return res.json();
};

const AdsList = () => {
  const navigate = useNavigate();
  const { data: ads, error, isLoading } = useSWR(API_URL, fetcher);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Avisos
      </Typography>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>{error.message}</Alert>
      )}

      {!isLoading && !error && ads && ads.length === 0 && (
        <Typography variant="body1" sx={{ py: 4, textAlign: 'center' }}>
          No hay avisos disponibles.
        </Typography>
      )}

      {!isLoading && !error && ads && ads.length > 0 && (
        <List>
          {ads.map((ad) => (
            <ListItem key={ad.id}>
              <ListItemText primary={ad.title} secondary={ad.description} />
            </ListItem>
          ))}
        </List>
      )}

      <Button variant="contained" color="primary" onClick={() => navigate('/create')}>
        Crear Nuevo Aviso
      </Button>
    </Container>
  );
};

export default AdsList;
