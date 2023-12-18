import { bold, large, xmedium, xregular, base, regular, xsmall } from '@styles/fonts';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const LargeTitle = styled.h2`
	font-size: ${large};
	font-weight: ${bold};
`;

const Subtitle = styled.h4`
	font-size: ${xmedium};
	font-weight: ${xregular};
`;

const Body = styled.p`
	font-size: ${base};
	font-weight: ${xregular};
`;

const Paragraph = styled.p`
	font-size: ${base};
	font-weight: ${regular};
`;

const Subheader = styled.p`
	font-size: ${xsmall};
	font-weight: ${regular};
`;

type TypographyProps = {
	variant?: 'title' | 'subtitle' | 'body' | 'paragraph' | 'subheader';
} & PropsWithChildren;

const TypographyVariants = {
	title: LargeTitle,
	subtitle: Subtitle,
	body: Body,
	paragraph: Paragraph,
	subheader: Subheader,
};

const Typography: React.FC<TypographyProps> = ({ children, variant = 'paragraph' }) => {
	const TypographyVariant = TypographyVariants[variant];
	return <TypographyVariant data-variant={variant}>{children}</TypographyVariant>;
};

export default Typography;
