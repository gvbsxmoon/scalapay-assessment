import Typography from '@atoms/Typography';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
	& > * {
		margin-bottom: 24px;
	}
`;

type FieldsetProps = {
	title: string;
} & PropsWithChildren;

const Fieldset: React.FC<FieldsetProps> = ({ title, children }) => {
	return (
		<StyledFieldset>
			<Typography variant='subtitle'>{title}</Typography>
			{children}
		</StyledFieldset>
	);
};

export default Fieldset;
