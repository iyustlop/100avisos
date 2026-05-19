import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Ad } from '../types';
import { List, ListItem, ListItemText, Button, Container, Typography } from '@mui/material';

const AdsList: React.FC = () => {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get<Ad[]>('http://localhost:3001/api/ads');
        setAds(response.data);
      } catch (error) {
        console.error('Error fetching ads:', error);
      }
    };
    fetchAds();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Avisos
      </Typography>
      <List>
        {ads.map((ad) => (
          <ListItem key={ad.id}>
            <ListItemText primary={ad.title} secondary={ad.description} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">
        Crear Nuevo Aviso
      </Button>
    </Container>
  );
};

export default AdsList;