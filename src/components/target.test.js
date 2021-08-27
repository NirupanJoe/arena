jest.mock('../core/context', () => ({
	state: { x: 50, y: 50 },
	actions: {
		moveTarget: jest.fn(),
	},
}));

import { render, fireEvent } from '@testing-library/react';
import context from '../core/context';
import Target from './target';

describe('target', () => {
	test('target render', () => {
		const component = render(Target(context)).getByRole('target');

		expect(component).toBeInTheDocument();
		expect(component).toHaveClass('target');
		expect(component).toHaveStyle({
			top: `${ context.state.y }%`,
			left: `${ context.state.x }%`,
		});
	});

	test('when clicked the target, triggers the action moveTarget', () => {
		const { actions } = context;
		const component = render(Target(context)).getByRole('target');

		fireEvent.click(component);
		expect(actions.moveTarget).toHaveBeenCalled();
	});
});
