// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from '../App';

describe('App test', () => {
    it('increases count on click', async () => {
        render(<App />);

        const countButton = screen.getByText('count is 0');
        expect(countButton).toBeInTheDocument();

        await userEvent.click(countButton);

        expect(countButton).toHaveTextContent('count is 1');
    });
});
