import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from './ThemeToggle';

// Mocking react-icons to prevent actual rendering, focusing on component logic
// and avoiding issues if icons are not found in test environment.
jest.mock('react-icons/bs', () => ({
  BsSunFill: () => <svg data-testid="sun-icon" />,
  BsMoonFill: () => <svg data-testid="moon-icon" />,
}));

describe('ThemeToggle Component', () => {
  it('renders sun icon when theme is dark', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="dark" toggleTheme={mockToggleTheme} />);
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('moon-icon')).not.toBeInTheDocument();
  });

  it('renders moon icon when theme is light', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="light" toggleTheme={mockToggleTheme} />);
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('sun-icon')).not.toBeInTheDocument();
  });

  it('calls toggleTheme function on click', () => {
    const mockToggleTheme = jest.fn();
    render(<ThemeToggle theme="dark" toggleTheme={mockToggleTheme} />);
    // The ThemeToggle component now renders a button
    fireEvent.click(screen.getByRole('switch')); 
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
});
