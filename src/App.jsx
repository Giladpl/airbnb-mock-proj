import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../frontend/src/pages/HomePage';
import React from 'react';

import './assets/styles/styles.scss';

export function App() {
	return (
		<Router>
			<div className='App'>
				{/* <AppHeader /> */}
				<Switch>
					<Route path='/' component={HomePage} />
				</Switch>
				{/* <AppFooter /> */}
			</div>
		</Router>
	);
}
