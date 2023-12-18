import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div<{
	$flexDirection?: string;
	$alignItems?: string;
	$justifyContent?: string;
	$gap?: string;
}>`
	display: flex;
	flex-direction: ${props => props.$flexDirection};
	justify-content: ${props => props.$justifyContent};
	align-items: ${props => props.$alignItems};
	gap: ${props => props.$gap};
`;

type FlexProps = {
	flexDirection?: string;
	alignItems?: string;
	justifyContent?: string;
	gap?: string;
} & PropsWithChildren;

const Flex: React.FC<FlexProps> = ({ flexDirection, alignItems, justifyContent, gap, children }) => {
	return (
		<FlexContainer $flexDirection={flexDirection} $alignItems={alignItems} $justifyContent={justifyContent} $gap={gap}>
			{children}
		</FlexContainer>
	);
};

export default Flex;
