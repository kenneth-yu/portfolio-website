import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PageLayout } from './containers/PageLayout';

vi.mock('./components/Carousel', () => ({
  Carousel: () => <div data-testid="carousel-mock">Carousel</div>,
}));

test('renders hero heading', () => {
  render(<PageLayout />);
  const headingElement = screen.getByText(/Hi, My Name is Kenny/i);
  expect(headingElement).toBeInTheDocument();
});
