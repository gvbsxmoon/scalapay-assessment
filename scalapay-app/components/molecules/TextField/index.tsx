'use client';

import { useValidation } from 'usetheform';
import styles from './TextField.module.css';
import Typography from '@atoms/Typography';

type TextFieldProps = {
	label: string;
	id: string;
	type: string;
	validators?: any;
};

const TextField: React.FC<TextFieldProps> = ({ label, id, type, validators, ...rest }) => {
	const [status, validation] = useValidation(validators);

	return (
		<div className={styles.wrapper}>
			<label className={styles.label} htmlFor={id}>
				{label}
			</label>
			<input className={`${styles.input} ${status.error && styles.error}`} type={type} id={id} {...validation} {...rest} />
			{status.error && <Typography variant='caption'>{status.error}</Typography>}
		</div>
	);
};

export default TextField;
