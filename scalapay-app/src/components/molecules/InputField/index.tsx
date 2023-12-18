import styled from 'styled-components';
import { base, small } from '@styles/fonts';
import { lightGray, scalapayPink } from '@styles/colors';
import Flex from '@atoms/FlexContainer';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

const Label = styled.label`
	font-size: ${base};
`;

const StyledInputField = styled.input<{ $hasError?: boolean }>`
	border-radius: 8px;
	border: ${props => (props.$hasError ? '2px solid orangered' : `2px solid ${lightGray}`)};
	padding: 8px 12px;
	box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.08);
	font-size: ${small};

	&:focus,
	&:active {
		outline: none;
		border: 2px solid ${scalapayPink};
	}
`;

type InputFieldProps = {
	label: string;
	name: string;
	type: string;
	placeholder?: string;
	register: UseFormRegister<FieldValues>;
	options?: RegisterOptions<FieldValues, string> | undefined;
};

const InputField: React.FC<InputFieldProps> = ({ label, name, type, placeholder, register, options }) => {
	return (
		<Flex flexDirection='column' gap='8px'>
			<Label>{label}</Label>
			<StyledInputField type={type} placeholder={placeholder} {...register(name, { ...options })} />
		</Flex>
	);
};

export default InputField;
