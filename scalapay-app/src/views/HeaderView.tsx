import Flex from '@atoms/FlexContainer';
import Logo from '@assets/logo_black.svg';
import Typography from '@atoms/Typography';

const HeaderView: React.FC = () => {
	return (
		<Flex justifyContent='space-between' alignItems='center'>
			<Typography variant='title'>Checkout</Typography>
			<img src={Logo} alt='scalapay logo' height={32} />
		</Flex>
	);
};

export default HeaderView;
