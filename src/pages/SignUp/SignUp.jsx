import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../store/actions/userAction';
import {ImageUploader} from '../../cmps/ImageUploader'
import './SignUp.scss';

export const SignUp = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [signUpCred, setSignUpCred] = useState({
		fullname: '',
		email: '@gmail.com',
		password: '1234',
		imgUrl: '',
	});

	const handleChange = ({ target }) => {
		const field = target.name;
		const value = target.type === 'number' ? +target.value : target.value;
		setSignUpCred({ ...signUpCred, [field]: value });
	};

	const onSignUp = async (ev) => {
		ev.preventDefault();
		await dispatch(signup(signUpCred));
		history.push('/');
	};

	return (
		<form className='signup main-layout flex-column' onSubmit={onSignUp}>
			<h3 className='signup__header'>Sign up:</h3>
			<div className='signup__group'>
				<input
					className='signup__input'
					type='text'
					id='fullname'
					name='fullname'
					value={signUpCred.fullname}
					onChange={handleChange}
					required
					placeholder='Full Name'
				/>
				<label className='signup__label' htmlFor='fullname'>
					Full Name
				</label>
			</div>
			<div className='signup__group'>
				<input
					className='signup__input'
					type='email'
					id='email'
					name='email'
					value={signUpCred.email}
					onChange={handleChange}
					required
					placeholder='Email'
				/>
				<label className='signup__label' htmlFor='email'>
					Email:
				</label>
			</div>
			<div className='signup__group'>
				<input
					className='signup__input'
					type='text'
					id='password'
					name='password'
					value={signUpCred.password}
					onChange={handleChange}
					required
					placeholder='Password'
				/>
				<label className='signup__label' htmlFor='password'>
					Password:
				</label>
			</div>
			<div className='signup__group'>
                <ImageUploader/>
				{/* <input
					className='signup__input'
					type='text'
					id='imgUrl'
					name='imgUrl'
					value={signUpCred.imgUrl}
					onChange={handleChange}
					required
					placeholder='Image URL'
				/>
				<label className='signup__label' htmlFor='imgUrl'>
					Image URL:
				</label> */}
			</div>
			<div className='signup__group'>
				<button className='signup__btn'>Sign Up</button>
			</div>
		</form>
	);
};
