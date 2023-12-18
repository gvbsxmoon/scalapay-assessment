import Flex from '@atoms/FlexContainer';
import Typography from '@atoms/Typography';
import { useOrder, useOrderReducer } from '@context/contextHooks';
import ItemCard from '@molecules/ItemCard';

const CartView: React.FC = () => {
	const order = useOrder();
	const reducer = useOrderReducer();

	const updateQuantityUpdate = (itemId: string, newQuantity: number) => {
		const items = order.items?.map(item => (item.id === itemId ? { ...item, quantity: newQuantity } : item));

		reducer({ items });
	};

	return (
		<Flex flexDirection='column' gap='24px'>
			<Typography variant='subtitle'>Cart</Typography>
			<Flex flexDirection='column' gap='16px'>
				{order.items && order.items.map((item: Item) => <ItemCard key={item.id} item={item} onQuantityUpdate={updateQuantityUpdate} />)}
			</Flex>
		</Flex>
	);
};

export default CartView;
