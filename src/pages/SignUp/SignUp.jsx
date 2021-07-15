import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../store/actions/userAction';
import { ImageUploader } from '../../cmps/ImageUploader';
import './SignUp.scss';

export const SignUp = (props) => {
	const [urls, setUrls] = useState([]);

	const dispatch = useDispatch();
	const history = useHistory();
	const [signUpCred, setSignUpCred] = useState({
		fullname: '',
		email: '',
		password: '',
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
			<h2 className='signup__header'>Sign up:</h2>
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
				<ImageUploader isMultiple={false} urls={urls} setUrls={setUrls} />
			</div>
			<div className='signup__group'>
				<button className='signup__btn'>Sign Up</button>
			</div>
		</form>
	);
};
