import Card from '@atoms/ Card';
import Button from '@atoms/Button';
import Flex from '@atoms/FlexContainer';
import Typography from '@atoms/Typography';
import { useEffect, useState } from 'react';

type ItemCardProps = {
	item: Item;
	onQuantityUpdate: (id: string, qt: number) => void;
};

const ItemCard: React.FC<ItemCardProps> = ({ item, onQuantityUpdate }) => {
	const [itemQuantity, setItemQuantity] = useState(item.quantity);

	const incrementQuantity = (): void => {
		setItemQuantity(itemQuantity + 1);
	};

	const decrementQuantity = (): void => {
		if (itemQuantity !== 0) {
			setItemQuantity(itemQuantity - 1);
		}
	};

	useEffect(() => {
		onQuantityUpdate(item.id, itemQuantity);
	}, [itemQuantity]);

	return (
		<Card>
			<Typography>{item.name}</Typography>
			<Typography>{item.price.amount + ' ' + item.price.currency}</Typography>
			<Flex alignItems='center' justifyContent='space-between'>
				<Typography>
					{parseFloat(item.price.amount) * item.quantity} {item.price.currency}
				</Typography>
				<Flex alignItems='center' gap='12px'>
					<Button variant='tertiary' onClick={decrementQuantity}>
						-
					</Button>
					<Typography>{itemQuantity}</Typography>
					<Button variant='tertiary' onClick={incrementQuantity}>
						+
					</Button>
				</Flex>
			</Flex>
		</Card>
	);
};

export default ItemCard;
