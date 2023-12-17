import { PropsWithChildren } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
	variant?: 'primary' | 'secondary' | 'tertiary';
} & PropsWithChildren;

const ButtonVariants = {
	primary: styles.primary,
	secondary: styles.secondary,
	tertiary: styles.tertiary,
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
	const classes = `${styles.base} ${ButtonVariants[variant]}`;

	return (
		<button className={classes} data-variant={variant} {...rest}>
			{children}
		</button>
	);
};

export default Button;
