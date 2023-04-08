import { render } from '@testing-library/react';
import Navbar from '../src/componets/navbar';

describe('Navbar', () => {
  it('renders a brand logo and a list of links', () => {
    const { getByText } = render(<Navbar />);

    const brandLogo = getByText(/math magicians/i);
    expect(brandLogo).toBeInTheDocument();

    const homeLink = getByText(/home/i);
    expect(homeLink).toBeInTheDocument();

    const calculatorLink = getByText(/calculator/i);
    expect(calculatorLink).toBeInTheDocument();

    const quoteLink = getByText(/quote/i);
    expect(quoteLink).toBeInTheDocument();
  });
});
