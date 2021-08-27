/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
import * as random from '@laufire/utils/random';
import PositionService from './positionService';

describe('PositionService', () => {
	const { getRandomX, getRandomY } = PositionService;
	const number = 50;
	const ten = 10;
	const hundred = 100;

	test('getRandomX return x value', () => {
		const width = 100;
		const min = width / ten;
		const max = hundred - (width / ten);
		const expextedResult = number - (width / ten);

		jest.spyOn(random, 'rndBetween').mockReturnValue(number);

		const result = getRandomX({ width });

		expect(random.rndBetween).toHaveBeenCalledWith(min, max);
		expect(result).toEqual(expextedResult);
	});

	test('getRandomY return Y value', () => {
		const height = 100;
		const min = height / ten;
		const max = hundred - (height / ten);
		const expextedResult = number - (height / ten);

		jest.spyOn(random, 'rndBetween').mockReturnValue(number);

		const result = getRandomY({ height });

		expect(random.rndBetween).toHaveBeenCalledWith(min, max);
		expect(result).toEqual(expextedResult);
	});
});
