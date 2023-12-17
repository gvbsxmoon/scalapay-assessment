/* 'use client';

import { PropsWithChildren, useState } from 'react';
import { createContext } from 'react';

export type OrderContextModel = {
	quantita?: string;
};

export const OrderProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const OrderContext = createContext<OrderContextModel>({});
	const OrderReducer = createContext((_update: Partial<OrderContextModel> | undefined) => {});
	const [order, setOrder] = useState<OrderContextModel>({});

	const udpateOrder = (orderUpdate: Partial<OrderContextModel> | undefined) => {};

	return (
		<OrderContext.Provider value={order}>
			<OrderReducer.Provider value={udpateOrder}>{children}</OrderReducer.Provider>
		</OrderContext.Provider>
	);
};
 */