import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from '../../frontend/src/pages/HomePage';
import { MainHeader} from '../../frontend/src/cmps/MainHeader'
import { MainFooter} from '../../frontend/src/cmps/MainFooter'
import React from 'react';

import './assets/styles/styles.scss';

export function App() {
	return (
		<Router>
			<div className='App'>
				<MainHeader />
				<Switch>
					<Route path='/' component={HomePage} />
				</Switch>
				<MainFooter />
			</div>
		</Router>
	);
}
