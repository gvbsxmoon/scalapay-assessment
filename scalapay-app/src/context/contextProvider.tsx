import { items, merchant, totalAmount } from '@assets/mock';
import { PropsWithChildren, useEffect, useState } from 'react';
import { createContext } from 'react';

type OrderContextModel = Partial<Order>;

export const OrderContext = createContext<OrderContextModel>({});
export const OrderReducer = createContext((_update: Partial<OrderContextModel>) => {});

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [order, setOrder] = useState<OrderContextModel>({ items, merchant, totalAmount });

	useEffect(() => {
		if (order.items) {
			updateOrder({
				totalAmount: {
					amount: order.items
						.reduce((total, item) => {
							const itemAmount = parseFloat(item.price.amount) * item.quantity;
							return total + itemAmount;
						}, 0)
						.toString(),
					currency: 'EUR',
				},
			});
		}
	}, [order.items]);

	const updateOrder = (orderUpdate: Partial<OrderContextModel>) => {
		if (orderUpdate) {
			setOrder(prevOrder => ({ ...prevOrder, ...orderUpdate }));
		}
	};

	return (
		<OrderContext.Provider value={order}>
			<OrderReducer.Provider value={updateOrder}>{children}</OrderReducer.Provider>
		</OrderContext.Provider>
	);
};
