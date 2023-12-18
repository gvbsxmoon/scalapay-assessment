import Fieldset from '@molecules/Fieldset';
import InputField from '@molecules/InputField';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const ConsumerForm: React.FC<{ register: UseFormRegister<FieldValues> }> = ({ register }) => {
	return (
		<Fieldset title='Consumer'>
			<InputField type='text' name='consumer.givenNames' label='Name' register={register} options={{ required: true }} />
			<InputField type='text' name='consumer.surname' label='Surname' register={register} options={{ required: true }} />
			<InputField type='text' name='consumer.email' label='Email' register={register} />
		</Fieldset>
	);
};

export default ConsumerForm;
