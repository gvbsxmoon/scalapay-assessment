import Fieldset from '@molecules/Fieldset';
import InputField from '@molecules/InputField';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const ShippingForm: React.FC<{ register: UseFormRegister<FieldValues> }> = ({ register }) => {
	const _postCodeRegexp = new RegExp(/^\d+$/);

	return (
		<Fieldset title='Shipping'>
			<InputField
				type='text'
				name='shipping.countryCode'
				placeholder='IT'
				label='Country code* (must be 2 characters long)'
				register={register}
				options={{ required: true, maxLength: 2 }}
			/>
			<InputField type='text' name='shipping.name' placeholder='John Doe' label='Full name*' register={register} options={{ required: true }} />
			<InputField
				type='text'
				name='shipping.postcode'
				placeholder='20900'
				label='Postcode* (must be numeric)'
				register={register}
				options={{ required: true, pattern: _postCodeRegexp }}
			/>
			<InputField type='text' name='shipping.suburb' placeholder='Milan' label='Suburb*' register={register} options={{ required: true }} />
			<InputField type='text' name='shipping.line1' placeholder='Via Montenapoleone, 1' label='Street*' register={register} options={{ required: true }} />
		</Fieldset>
	);
};

export default ShippingForm;
