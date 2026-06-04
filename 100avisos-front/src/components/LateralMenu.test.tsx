import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import LateralMenu from './LateralMenu';

describe('LateralMenu', () => {
  it('renders all menu items with correct links', () => {
    render(
      <MemoryRouter>
        <LateralMenu />
      </MemoryRouter>
    );

    expect(screen.getByText('Menú')).toBeInTheDocument();

    const menuItems = [
      { label: 'Home', path: '/' },
      { label: 'Trayectos', path: '/tipos' },
      { label: 'Conductores', path: '/recursos' },
      { label: 'Estados', path: '/estados' },
      { label: 'Histórico', path: '/historico' },
    ];

    menuItems.forEach((item) => {
      const link = screen.getByRole('link', { name: item.label });
      expect(link).toBeInTheDocument();
      expect(link.getAttribute('href')).toBe(item.path);
    });
  });
});
