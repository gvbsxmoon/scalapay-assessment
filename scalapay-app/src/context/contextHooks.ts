import { useContext } from 'react';
import { OrderContext, OrderReducer } from './contextProvider';

export function useOrder() {
	return useContext(OrderContext);
}

export function useOrderReducer() {
	return useContext(OrderReducer);
}
