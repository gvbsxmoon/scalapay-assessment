import Fieldset from '@molecules/Fieldset';
import InputField from '@molecules/InputField';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const BillingForm: React.FC<{ register: UseFormRegister<FieldValues> }> = ({ register }) => {
	return (
		<Fieldset title='Billing'>
			<InputField type='text' name='billing.countryCode' label='Country code (must be 2 characters long)' register={register} options={{ maxLength: 2 }} />
			<InputField type='text' name='billing.name' label='Full name' register={register} />
			<InputField type='text' name='billing.phoneNumber' label='Phone number' register={register} />
			<InputField type='text' name='billing.postcode' label='Postcode' register={register} />
			<InputField type='text' name='billing.suburb' label='Suburb' register={register} />
			<InputField type='text' name='billing.line1' label='Street' register={register} />
		</Fieldset>
	);
};

export default BillingForm;
