import Card from '@atoms/ Card';
import Button from '@atoms/Button';
import Typography from '@atoms/Typography';
import { items } from '@mock';
import styles from './ProductCard.module.css';

const ProductCard: React.FC = () => {
	const s = items[0];

	return (
		<Card>
			<Typography>{s.name}</Typography>
			<Typography>{s.price.amount + ' ' + s.price.currency}</Typography>
			<div className={styles.quantity}>
				<Button variant='tertiary'>+</Button>
				<Typography>{s.quantity}</Typography>
				<Button variant='tertiary'>-</Button>
			</div>
			<Typography>subtotal</Typography>
		</Card>
	);
};

export default ProductCard;
