import { render } from '@testing-library/react';
import App from './App';

vi.mock('./website/Pages/Home/Navbar', () => ({
  default: () => <div>Navbar</div>,
}));
vi.mock('./website/Pages/Home/Homescreen', () => ({
  default: () => <div>Home</div>,
}));
describe('App', () => {
  it('renders without crashing', () => {
    // Mock the components used in the App component

    const { getByText } = render(<App />);
    expect(getByText('Navbar')).toBeInTheDocument();
    expect(getByText('Home')).toBeInTheDocument();
  });
});
