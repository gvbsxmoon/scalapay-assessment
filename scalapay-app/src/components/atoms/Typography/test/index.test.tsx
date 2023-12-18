import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from '../index';

describe('atom: Typography', () => {
	it('should render a Large Title', () => {
		const { getByText } = render(<Typography variant='title'>Large Title</Typography>);
		const largeTitleTypography = getByText('Large Title');
		expect(largeTitleTypography).toBeInTheDocument();
		expect(largeTitleTypography.tagName).toBe('H2');
	});

	it('should render a Subtitle', () => {
		const { getByText } = render(<Typography variant='subtitle'>Subtitle</Typography>);
		const subtitleTypography = getByText('Subtitle');
		expect(subtitleTypography).toBeInTheDocument();
		expect(subtitleTypography.tagName).toBe('H4');
	});

	it('should render a Body', () => {
		const { getByText } = render(<Typography variant='body'>Body</Typography>);
		const bodyTypography = getByText('Body');
		expect(bodyTypography).toBeInTheDocument();
		expect(bodyTypography.tagName).toBe('P');
	});

	it('should render a Paragraph', () => {
		const { getByText } = render(<Typography variant='paragraph'>Paragraph</Typography>);
		const paragraphTypography = getByText('Paragraph');
		expect(paragraphTypography).toBeInTheDocument();
		expect(paragraphTypography.tagName).toBe('P');
	});

	it('should render a Subheader', () => {
		const { getByText } = render(<Typography variant='subheader'>Subheader</Typography>);
		const captionTypography = getByText('Subheader');
		expect(captionTypography).toBeInTheDocument();
		expect(captionTypography.tagName).toBe('P');
	});
});
