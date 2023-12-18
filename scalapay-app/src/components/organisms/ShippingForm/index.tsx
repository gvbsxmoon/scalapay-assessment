import Fieldset from '@molecules/Fieldset';
import InputField from '@molecules/InputField';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const ShippingForm: React.FC<{ register: UseFormRegister<FieldValues> }> = ({ register }) => {
	return (
		<Fieldset title='Shipping'>
			<InputField type='text' name='shipping.countryCode' label='Country code (must be 2 characters long)' register={register} options={{ required: true, maxLength: 2 }} />
			<InputField type='text' name='shipping.name' label='Full name' register={register} options={{ required: true }} />
			<InputField type='text' name='shipping.postcode' label='Postcode' register={register} options={{ required: true }} />
			<InputField type='text' name='shipping.suburb' label='Suburb' register={register} options={{ required: true }} />
			<InputField type='text' name='shipping.line1' label='Street' register={register} options={{ required: true }} />
		</Fieldset>
	);
};

export default ShippingForm;
