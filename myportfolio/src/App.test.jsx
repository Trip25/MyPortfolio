import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mocking ThemeToggle child component as its tests are separate
// and to simplify App.test.jsx.
// We only need to ensure it's clickable and App component reacts.
jest.mock('./components/ThemeToggle/ThemeToggle', () => {
  // Mocking the ThemeToggle component
  // It needs to be a component that accepts onClick to simulate user interaction
  return ({ toggleTheme }) => (
    <button data-testid="mock-theme-toggle" onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
});


describe('App Component Theme Switching', () => {
  beforeEach(() => {
    // Reset body class before each test
    document.body.className = '';
  });

  it('applies dark-mode to body by default', () => {
    render(<App />);
    expect(document.body).toHaveClass('dark-mode');
  });

  it('toggles to light-mode and back to dark-mode, updating body class', async () => {
    render(<App />);
    
    // The ThemeToggle is mocked, so we look for our mock button.
    // If ThemeToggle was not mocked, and it renders a button with role="switch",
    // screen.getByRole('switch') would be appropriate.
    const toggleButton = screen.getByTestId('mock-theme-toggle');

    // Initial state: dark-mode (verified by the previous test and App's default state)
    expect(document.body).toHaveClass('dark-mode');

    // Click to switch to light mode
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(document.body).toHaveClass('light-mode');
      expect(document.body).not.toHaveClass('dark-mode');
    });
    
    // Click to switch back to dark mode
    fireEvent.click(toggleButton);
    await waitFor(() => {
      expect(document.body).toHaveClass('dark-mode');
      expect(document.body).not.toHaveClass('light-mode');
    });
  });
});
