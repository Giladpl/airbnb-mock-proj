import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { MainHeader } from './cmps/MainHeader';
import { MainFooter } from './cmps/MainFooter';
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
