import React, { useEffect, useState } from 'react';
import { ReactComponent as MagnifyingGlass } from '../../assets/svgs/magnifying-glass.svg';

import './Filter.scss';

export const Filter = (props) => {
	const [inputFocus, setInputFocus] = useState(null);

	useEffect(() => {
		setInputFocus(document.activeElement);
	}, [inputFocus]);

	const onInputFocus = () => {
		setInputFocus(document.activeElement);
	};
	const onInputBlur = () => {
		setInputFocus(null);
	};

	const setStyleOnFocus = () => {
		// if (document.activeElement !== inputFocus)
		// 	return { background: '#ffff' };
		// else return { background: '#ebebeb' };
	};

	return (
		<React.Fragment>
			<form className='filter'>
				<div className='search-inputs'  style={setStyleOnFocus()}>
					<label htmlFor='location'> Location </label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='location'
						id='location'
						placeholder='Where are you going?'
					/>
				</div>
				<div className='search-inputs' style={setStyleOnFocus()}>
					<label htmlFor='check-in'>Check in</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='check-in'
						id='check-in'
						placeholder='Add dates'
					/>
				</div>
				<div className='search-inputs' style={setStyleOnFocus()}>
					<label htmlFor='check-out'>Check out</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='check-out'
						id='check-out'
						placeholder='Add dates'
					/>
				</div>
				<div className='search-inputs' style={setStyleOnFocus()}>
					<label htmlFor='guests'>Guests</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='guests'
						id='guests'
						placeholder='Add guests'
					/>
				</div>
				<div className='search-button'>
					<button className='flex-center'>
						<MagnifyingGlass fill='white' />
					</button>
				</div>
			</form>
		</React.Fragment>
	);
};
