import PositionService from './positionService';

const moveTarget = ({ config }) => ({
	x: PositionService.getRandomX(config),
	y: PositionService.getRandomY(config),
});

const TargetManager = {
	moveTarget,
};

export default TargetManager;
