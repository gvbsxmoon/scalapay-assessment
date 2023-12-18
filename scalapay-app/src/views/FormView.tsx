import Button from '@atoms/Button';
import Flex from '@atoms/FlexContainer';
import Typography from '@atoms/Typography';
import { useOrder } from '@context/contextHooks';
import BillingForm from '@organisms/BillingForm';
import ConsumerForm from '@organisms/ConsumerForm';
import ShippingForm from '@organisms/ShippingForm';
import axios from 'axios';
import { CSSProperties, useState } from 'react';

import { useForm, FieldValues } from 'react-hook-form';

const formStyle: CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	gap: '24px',
};

const FormView = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [errors, setErrors] = useState<string[]>([]);

	const order = useOrder();

	/* form properties */
	const { register, handleSubmit } = useForm<FieldValues>();

	const onSubmit = async (data: FieldValues): Promise<void> => {
		const _baseUrl: string = 'http://localhost:3000';
		const _endpoint: string = '/api/v1/order';

		setLoading(true);
		setErrors([]);

		const items: Item[] = order.items!.filter(item => item.quantity > 0);
		const isBillingValid = Object.values(data.billing).every(value => value !== '');

		const orderBody: Order = {
			totalAmount: order.totalAmount!,
			consumer: data.consumer,
			shipping: data.shipping,
			items,
			merchant: order.merchant!,
			billing: isBillingValid ? data.billing : data.shipping,
		};

		try {
			const response = await axios.post(`${_baseUrl}${_endpoint}`, orderBody, { headers: { Accept: 'application/json' } });
			const { checkoutUrl } = response.data;

			if (checkoutUrl) {
				window.open(checkoutUrl, '_top');
			}
		} catch (error: any) {
			const errors: string[] = error.response.data.message.message;
			setErrors(errors);
		}

		setLoading(false);
	};

	return (
		<form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
			<ConsumerForm register={register} />
			<ShippingForm register={register} />
			<BillingForm register={register} />

			{loading && <Typography>Loading...</Typography>}
			{errors && errors.length > 0 && errors.map(error => <Typography>{error}</Typography>)}

			<Flex justifyContent='space-between' alignItems='center'>
				<Typography variant='body'>
					Total: {order.totalAmount?.amount} {order.totalAmount?.currency}
				</Typography>
				<Button type='submit' variant='primary'>
					Proceed to checkout
				</Button>
			</Flex>
		</form>
	);
};

export default FormView;
