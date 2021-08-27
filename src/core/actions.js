import TargetManager from '../services/TargetManager';

const moveTarget = (context) =>
	TargetManager.moveTarget(context);

const actions = {
	moveTarget,
};

export default actions;
