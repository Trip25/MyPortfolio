import React from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button role="switch" aria-checked={theme === 'dark'} className="theme-toggle" onClick={toggleTheme}>
      {theme === 'dark' ? <BsSunFill className="theme-icon" data-testid="sun-icon" /> : <BsMoonFill className="theme-icon" data-testid="moon-icon" />}
    </button>
  );
};

export default ThemeToggle;
