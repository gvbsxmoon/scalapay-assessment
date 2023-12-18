import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Fieldset from '../index';

describe('molecules: Fieldset', () => {
	it('should render a Fieldset with title', () => {
		const { getByText } = render(<Fieldset title='Test Fieldset'>Fieldset</Fieldset>);
		const titleElement = getByText('Test Fieldset');
		expect(titleElement).toBeInTheDocument();
		expect(titleElement.tagName).toBe('H4');
	});
});
