import { rndBetween } from '@laufire/utils/random';

const ten = 10;
const hundred = 100;

const getRandomX = ({ width }) =>
	rndBetween(width / ten, hundred - (width / ten)) - (width / ten);

const getRandomY = ({ height }) =>
	rndBetween(height / ten, hundred - (height / ten)) - (height / ten);

const PositionService = {
	getRandomX,
	getRandomY,
}
;

export default PositionService;
