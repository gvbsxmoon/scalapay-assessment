import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ItemCard from '../index';

describe('molecules: ItemCard', () => {
	test('should render an ItemCard with correct quantity and updates quantity on button click', () => {
		const item: Item = {
			id: '1',
			name: 'Sample',
			price: {
				amount: '10',
				currency: 'EUR',
			},
			quantity: 2,
			category: 'Sample Categ',
			sku: 'TEST_SKU',
			brand: 'Sample Brand',
		};

		const onQuantityUpdateMock = jest.fn();

		const { getByText } = render(<ItemCard item={item} onQuantityUpdate={onQuantityUpdateMock} />);

		expect(getByText('Sample')).toBeInTheDocument();
		expect(getByText('20 EUR')).toBeInTheDocument();

		fireEvent.click(getByText('+'));

		expect(getByText('3')).toBeInTheDocument();

		expect(onQuantityUpdateMock).toHaveBeenCalledWith('1', 3);

		fireEvent.click(getByText('-'));

		expect(getByText('2')).toBeInTheDocument();

		expect(onQuantityUpdateMock).toHaveBeenCalledWith('1', 2);
	});
});
