import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import { render } from '@testing-library/react';

const renderWithRouter = (children: ReactElement) => {
  return render(<BrowserRouter>{children}</BrowserRouter>);
};

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithRouter(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/Home/gi)).toBeTruthy();
  });
});
