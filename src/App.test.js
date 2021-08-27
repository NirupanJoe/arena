/* eslint-disable react/display-name */
jest.mock('./components/target', () => () => <div role="target"/>);

import { React } from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App renders target', () => {
	const { getByRole } = render(<App/>);

	expect(getByRole('target')).toBeInTheDocument();
});
