export const isRequired =
	(message = 'This field is required') =>
	(value: string) =>
		value && value !== '' ? undefined : message;

export const isEmpty =
	(message = 'This field cannot be empty') =>
	(value: string) =>
		value && value.trim() !== '' ? undefined : message;
