import TargetManager from './TargetManager';
import config from '../core/config';
import PositionService from './positionService';

describe('TargetManager', () => {
	const { moveTarget } = TargetManager;

	test('moveTarget returns x and y', () => {
		const x = Symbol('x');
		const y = Symbol('y');

		jest.spyOn(PositionService, 'getRandomX').mockReturnValue(x);
		jest.spyOn(PositionService, 'getRandomY').mockReturnValue(y);
		const result = moveTarget({ config });

		expect(PositionService.getRandomX).toHaveBeenCalledWith(config);
		expect(PositionService.getRandomY).toHaveBeenCalledWith(config);
		expect(result).toMatchObject({
			x,
			y,
		});
	});
});
