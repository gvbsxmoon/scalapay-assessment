import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Flex from '../index';

describe('atoms: FlexContainer', () => {
	it('should render a Flex Container with specified styles', () => {
		const { container } = render(
			<Flex flexDirection='row' alignItems='center' justifyContent='space-between' gap='10px'>
				<div>Child 1</div>
				<div>Child 2</div>
			</Flex>,
		);

		const flexContainer = container.firstChild as HTMLElement;

		expect(flexContainer).toHaveStyle({
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			gap: '10px',
		});
	});
});
