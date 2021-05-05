import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadStays } from './store/actions/stayActions';
import { HomePage } from './pages/HomePage/HomePage';
import { MainHeader } from './cmps/MainHeader';
import { MainFooter } from './cmps/MainFooter';
import { StayApp } from './pages/StayApp';
import React from 'react';
import './App.scss';

import './assets/styles/styles.scss';

export function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadStays());
	}, [dispatch]);

	return (
		<Router>
			<div className='App'>
				<MainHeader />
				<Switch>
					<Route path='/stay' component={StayApp} />
					<Route path='/' component={HomePage} />
				</Switch>
				<MainFooter />
			</div>
		</Router>
	);
}
