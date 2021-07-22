import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
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
import { useSelector } from 'react-redux';

export function App() {
	// const [isMainHeader, setIsMainHeader] = useState(false);
	const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
	const PrivateRoute = (props) => {
		return loggedinUser ? <Route {...props} /> : <Redirect to='/login' />;
	};

	return (
		<Router>
			<ScrollToTop />
			<div className='App flex-column'>
				<MainHeader />
				<Switch>
					<Route path='/stay/explore/:location' component={StayLocation} />
					<PrivateRoute
						path='/stay/edit/:id?'
						component={StayEdit}
						loggedinUser={loggedinUser}
					/>
					)
					<Route path='/stay/:id' component={StayDetails} />
					<Route path='/stay' component={StayApp} />
					<Route path='/user' component={UserDetails} />
					<Route path='/statistics' component={UserStatistics} />
					<Route path='/signup' component={SignUp} />
					<Route path='/login' component={LogIn} />
					<Route path='/'>
						<HomePage />
					</Route>
				</Switch>
				<MainFooter />
			</div>
		</Router>
	);
}
