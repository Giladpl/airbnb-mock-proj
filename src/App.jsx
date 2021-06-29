import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage/HomePage';
import { StayEdit } from './pages/StayEdit';
import { MainHeader } from './cmps/MainHeader';
import { MainFooter } from './cmps/MainFooter';
import { ScrollToTop } from './cmps/ScrollToTop';
import { StayApp } from './pages/StayApp';
import { StayDetails } from './pages/StayDetails';
import { StayLocation } from './pages/StayLocation';
import { SignUp } from './pages/SignUp/SignUp';
import { LogIn } from './pages/LogIn/LogIn';
import { UserDetails } from './pages/UserDetails/UserDetails';
import { UserStatistics } from './pages/UserStatistics/UserStatistics';
import './assets/styles/styles.scss';
import './App.scss';

export function App() {
	const [isMainHeader, setIsMainHeader] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset >= 64 && !isMainHeader) {
				setIsMainHeader(true);
			} else if (window.pageYOffset < 64 && isMainHeader) {
				setIsMainHeader(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isMainHeader]);

	return (
		<Router>
			<ScrollToTop />
			<div className='App flex-column'>
				<MainHeader isMainHeader={isMainHeader} />
				<Switch>
					<Route path='/stay/explore/:location' component={StayLocation} />
					<Route path='/stay/edit/:id?' component={StayEdit} />
					<Route path='/stay/:id' component={StayDetails} />
					<Route path='/stay' component={StayApp} />
					<Route path='/user' component={UserDetails} />
					<Route path='/statistics' component={UserStatistics} />
					<Route path='/signup' component={SignUp} />
					<Route path='/login' component={LogIn} />
					<Route path='/'>
						<HomePage isFilter={isMainHeader} />
					</Route>
				</Switch>
				<MainFooter />
			</div>
		</Router>
	);
}
