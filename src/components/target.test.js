import { render } from '@testing-library/react';
import Target from './target';

test('target render', () => {
	const { getByRole } = render(Target());

	expect(getByRole('target')).toBeInTheDocument();
});
