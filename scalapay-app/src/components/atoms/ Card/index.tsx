import { offWhite, scalapayPink } from '@styles/colors';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	border: 2px solid ${scalapayPink};
	background: ${offWhite};
	padding: 16px;
	gap: 12px;
	border-radius: 12px;
	box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.08);
	width: 100%;
`;

const Card: React.FC<PropsWithChildren> = ({ children }) => <StyledCard>{children}</StyledCard>;

export default Card;
