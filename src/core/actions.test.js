import TargetManager from '../services/TargetManager';
import actions from './actions';
import context from './context';

describe('actions', () => {
	const { moveTarget } = actions;

	test('moveTarget', () => {
		const returnValue = Symbol('returnValue');

		jest.spyOn(TargetManager, 'moveTarget').mockReturnValue(returnValue);
		const result = moveTarget(context);

		expect(TargetManager.moveTarget).toHaveBeenCalledWith(context);
		expect(result).toEqual(returnValue);
	});
});
