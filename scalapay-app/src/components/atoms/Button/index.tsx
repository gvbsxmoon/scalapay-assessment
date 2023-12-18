import { dirtBlack, offWhite, scalapayBlue } from '@styles/colors';
import { base, xregular } from '@styles/fonts';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
	font-size: ${base};
	font-weight: ${xregular};
	color: ${offWhite};
	border-radius: 8px;
	padding: 12px 24px;
	cursor: pointer;
	border: none;
	transition: all 0.05s ease-in;

	&:hover {
		scale: 0.98;
	}

	&:active {
		scale: 1;
	}
`;

const PrimaryButton = styled(BaseButton)`
	background: ${dirtBlack};
`;

const SecondaryButton = styled(BaseButton)`
	background: ${scalapayBlue};
`;

const TertiaryButton = styled(BaseButton)`
	color: ${dirtBlack};
	padding: 0;
	width: 32px;
	aspect-ratio: 1;
	background: white;
	border-radius: 8px;
	border: 2px solid ${scalapayBlue};
`;

type ButtonProps = {
	variant?: 'primary' | 'secondary' | 'tertiary';
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & PropsWithChildren;

const ButtonVariants = {
	primary: PrimaryButton,
	secondary: SecondaryButton,
	tertiary: TertiaryButton,
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
	const ButtonVariant = ButtonVariants[variant];

	return (
		<ButtonVariant data-variant={variant} {...rest}>
			{children}
		</ButtonVariant>
	);
};

export default Button;
