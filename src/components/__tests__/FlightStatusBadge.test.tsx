import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FlightStatusBadge } from '../FlightStatusBadge';

describe('FlightStatusBadge', () => {
  it('renders with correct text for On Time status', () => {
    render(<FlightStatusBadge status="On Time" />);
    expect(screen.getByText('On Time')).toBeInTheDocument();
  });

  it('renders with correct text for Delayed status', () => {
    render(<FlightStatusBadge status="Delayed" />);
    expect(screen.getByText('Delayed')).toBeInTheDocument();
  });

  it('renders with correct text for Boarding status', () => {
    render(<FlightStatusBadge status="Boarding" />);
    expect(screen.getByText('Boarding')).toBeInTheDocument();
  });

  it('renders with correct text for Departed status', () => {
    render(<FlightStatusBadge status="Departed" />);
    expect(screen.getByText('Departed')).toBeInTheDocument();
  });
});