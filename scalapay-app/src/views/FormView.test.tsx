import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import FormView from './FormView';

jest.mock('axios');

describe('FormView', () => {
	it('renders a FormView', () => {
		const { getByText } = render(<FormView />);
		expect(getByText('Billing')).toBeInTheDocument();
	});

	it('submits the form and handles the API response', async () => {
		const mockPost = jest.spyOn(axios, 'post');
		mockPost.mockResolvedValueOnce({ data: { checkoutUrl: 'mocked-url' } });

		const { getByLabelText, getByText, getAllByLabelText } = render(<FormView />);

		const countryCodeInput = getAllByLabelText(/Country code/i)[0] as HTMLInputElement;
		const postCodeInput = getAllByLabelText(/Postcode/i)[0] as HTMLInputElement;
		const suburbInput = getAllByLabelText(/Suburb/i)[0] as HTMLInputElement;
		const streetInput = getAllByLabelText(/Street/i)[0] as HTMLInputElement;

		fireEvent.change(countryCodeInput, { target: { value: 'US' } });
		fireEvent.change(postCodeInput, { target: { value: '20900' } });
		fireEvent.change(suburbInput, { target: { value: 'New York' } });
		fireEvent.change(streetInput, { target: { value: 'Third Avn.' } });

		const nameInput = getAllByLabelText(/Name/i)[0] as HTMLInputElement;
		const surnameInput = getByLabelText(/Surname/i) as HTMLInputElement;
		const emailInput = getByLabelText(/Email/i) as HTMLInputElement;

		fireEvent.change(nameInput, { target: { value: 'John' } });
		fireEvent.change(surnameInput, { target: { value: 'Doe' } });
		fireEvent.change(emailInput, { target: { value: 'johndoe@gmail.com' } });

		fireEvent.click(getByText('Proceed to checkout'));

		/* this should work but the handleSubmit from the react-hook-form is blocking it */

		await waitFor(() => expect(axios.post).toHaveBeenCalled());
		expect(window.open).toHaveBeenCalledWith('mocked-url', '_top');
	});
});
