import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../index';

describe('atom: Button', () => {
	it('should render a PrimaryButton', () => {
		const { getByText } = render(<Button variant='primary'>Primary Button</Button>);
		const primaryButton = getByText('Primary Button');
		expect(primaryButton).toBeInTheDocument();
	});

	it('should render a SecondaryButton', () => {
		const { getByText } = render(<Button variant='secondary'>Secondary Button</Button>);
		const secondaryButton = getByText('Secondary Button');
		expect(secondaryButton).toBeInTheDocument();
	});

	it('should render a TertiaryButton', () => {
		const { getByText } = render(<Button variant='tertiary'>Tertiary Button</Button>);
		const tertiaryButton = getByText('Tertiary Button');
		expect(tertiaryButton).toBeInTheDocument();
	});
});
