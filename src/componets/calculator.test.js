import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './calculator';

describe('Calculator', () => {
  test('should display 0 as default output', () => {
    render(<Calculator />);
    const output = screen.getByText('0');
    expect(output).toBeInTheDocument();
  });

  test('should display AC button', () => {
    render(<Calculator />);
    const acButton = screen.getByText('AC');
    expect(acButton).toBeInTheDocument();
  });

  test('should display + button', () => {
    render(<Calculator />);
    const addButton = screen.getByText('+');
    expect(addButton).toBeInTheDocument();
  });
});
