import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '../index';

describe('atoms: Card', () => {
	it('should render a Card', () => {
		const { getByText } = render(<Card>Custom Card</Card>);
		const card = getByText('Custom Card');
		expect(card).toBeInTheDocument();
	});
});
