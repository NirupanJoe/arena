import { React } from 'react';

const style = ({ x, y }) => ({
	top: `${ y }%`,
	left: `${ x }%`,
});

const Target = ({ state, actions }) =>
	<div
		role="target"
		style={ style(state) }
		className="target"
		onClick={ () => actions.moveTarget() }
	/>;

export default Target;
