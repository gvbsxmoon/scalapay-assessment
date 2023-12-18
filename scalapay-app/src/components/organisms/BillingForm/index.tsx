import Fieldset from '@molecules/Fieldset';
import InputField from '@molecules/InputField';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const BillingForm: React.FC<{ register: UseFormRegister<FieldValues> }> = ({ register }) => {
	const _postCodeRegexp = new RegExp(/^\d+$/);

	return (
		<Fieldset title='Billing'>
			<InputField type='text' name='billing.name' placeholder='John Doe' label='Full name' register={register} />
			<InputField
				type='text'
				name='billing.countryCode'
				placeholder='IT'
				label='Country code (must be 2 characters long)'
				register={register}
				options={{ maxLength: 2 }}
			/>
			<InputField type='text' name='billing.name' placeholder='Joe Consumer' label='Full name' register={register} />
			<InputField
				type='text'
				name='billing.postcode'
				placeholder='20900'
				label='Postcode (must be numeric)'
				register={register}
				options={{ pattern: _postCodeRegexp }}
			/>
			<InputField type='text' name='billing.suburb' placeholder='Milan' label='Suburb' register={register} />
			<InputField type='text' name='billing.line1' placeholder='Via Montenapoleone, 1' label='Street' register={register} />
		</Fieldset>
	);
};

export default BillingForm;
