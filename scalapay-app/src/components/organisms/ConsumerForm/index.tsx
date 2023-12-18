import Fieldset from '@molecules/Fieldset';
import InputField from '@molecules/InputField';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const ConsumerForm: React.FC<{ register: UseFormRegister<FieldValues> }> = ({ register }) => {
	const _emailRegex = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	);

	return (
		<Fieldset title='Consumer'>
			<InputField type='text' name='consumer.givenNames' placeholder='John' label='Name*' register={register} options={{ required: true }} />
			<InputField type='text' name='consumer.surname' placeholder='Doe' label='Surname*' register={register} options={{ required: true }} />
			<InputField type='text' name='consumer.email' placeholder='email@domain.com' label='Email' register={register} options={{ pattern: _emailRegex }} />
		</Fieldset>
	);
};

export default ConsumerForm;
