import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

const AdForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/ads', { title, description });
      alert('Aviso creado');
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating ad:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Crear Aviso
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Crear
        </Button>
      </form>
    </Container>
  );
};

export default AdForm;