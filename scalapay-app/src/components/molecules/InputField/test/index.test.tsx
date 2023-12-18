import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import InputField from '../index';

describe('molecules: InputField', () => {
	const inputProps = {
		label: 'Test Label',
		name: 'testField',
		type: 'text',
		placeholder: 'Enter text',
		register: jest.fn(),
		options: {},
	};

	it('should render an InputField', () => {
		const { getByText, getByPlaceholderText } = render(
			<InputField
				label={inputProps.label}
				name={inputProps.name}
				type={inputProps.type}
				placeholder={inputProps.placeholder}
				register={inputProps.register}
				options={inputProps.options}
			/>,
		);

		const labelElement = getByText(inputProps.label);
		expect(labelElement).toBeInTheDocument();

		const inputElement = getByPlaceholderText(inputProps.placeholder);
		expect(inputElement).toBeInTheDocument();

		expect(inputProps.register).toHaveBeenCalledWith(inputProps.name, expect.any(Object));
	});

	it('should register an InputField ', () => {
		render(
			<InputField
				label={inputProps.label}
				name={inputProps.name}
				type={inputProps.type}
				placeholder={inputProps.placeholder}
				register={inputProps.register}
				options={inputProps.options}
			/>,
		);

		expect(inputProps.register).toHaveBeenCalledWith(inputProps.name, expect.any(Object));
	});

	it('should applies error styling when $hasError is true', () => {
		const label = 'Test Label';
		const name = 'testField';
		const type = 'text';
		const placeholder = 'Enter text';
		const register = jest.fn();
		const options = {};

		const { getByPlaceholderText } = render(
			<InputField label={label} name={name} type={type} placeholder={placeholder} register={register} options={options} />,
		);

		const inputElementWithError = getByPlaceholderText(placeholder);
		expect(inputElementWithError).toHaveStyle('border: 2px solid rgb(240, 204, 206);');
	});
});
