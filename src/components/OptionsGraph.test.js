import { render, screen } from '@testing-library/react';
import OptionsGraph from './OptionsGraph';

test('renders Risk & Reward Graph', () => {
    render(<OptionsGraph />);
    const headingElement = screen.getByText(/Risk & Reward Graph/i);
    expect(headingElement).toBeInTheDocument();
});
