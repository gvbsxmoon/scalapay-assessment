import styles from './Typography.module.css';
import { PropsWithChildren } from 'react';

type TypographyProps = {
	variant?: 'title' | 'subtitle' | 'body' | 'paragraph' | 'caption';
} & PropsWithChildren;

const TypographyVariants = {
	title: styles.title,
	subtitle: styles.subtitle,
	body: styles.body,
	paragraph: styles.paragraph,
	caption: styles.caption,
};

const Typography: React.FC<TypographyProps> = ({ children, variant = 'paragraph', ...rest }) => {
	return (
		<p className={TypographyVariants[variant]} data-variant={variant} {...rest}>
			{children}
		</p>
	);
};

export default Typography;
