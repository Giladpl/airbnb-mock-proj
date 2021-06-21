import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login, logout } from '../../store/actions/userAction';
import './LogIn.scss';

export const LogIn = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [logInCred, setLogInCred] = useState({ email: '', password: '' });
	const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);

	const handleChange = ({ target }) => {
		const field = target.name;
		const value = target.type === 'number' ? +target.value : target.value;
		setLogInCred({ ...logInCred, [field]: value });
	};

	const onLogin = async (ev) => {
		ev.preventDefault();
		await dispatch(login(logInCred));
		history.push('/');
	};

	const onLogout = async () => {
		await dispatch(logout());
		history.push('/');
	};

	return (
		<React.Fragment>
			{!loggedinUser && (
				<form className='login main-layout flex-column' onSubmit={onLogin}>
					<h2 className="login__header">Login:</h2>
					<div className='login__group'>
						<input
							className='login__input'
							type='email'
							id='email'
							name='email'
							value={logInCred.email}
							onChange={handleChange}
							required
							autoComplete='off'
							placeholder='Email'
						/>
						<label className='login__label' htmlFor='email'>
							Email
						</label>
					</div>
					<div className='login__group'>
						<input
							className='login__input'
							type='text'
							id='password'
							name='password'
							value={logInCred.password}
							onChange={handleChange}
							required
							autoComplete='off'
							placeholder='Password'
						/>
						<label className='login__label' htmlFor='password'>
							Password
						</label>
					</div>
					<div className='login__group'>
						<button className='login__btn'>Log In</button>
					</div>
					<Link className='router-link' to='/signup'>
						Don't have an account yet?
					</Link>
				</form>
			)}
			{loggedinUser && (
				<section className='logout'>
					<h2>Hello {loggedinUser.fullname}!</h2>
					<button onClick={onLogout}>Log out</button>
				</section>
			)}
		</React.Fragment>
	);
};
