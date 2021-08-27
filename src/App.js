import { React } from 'react';
import './App.scss';
import Target from './components/target';
import context from './core/context';

const App = () =>
	<div className="App">
		{ Target(context) }
	</div>;

export default App;
