import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as MagnifyingGlass } from '../../assets/svgs/magnifying-glass.svg';

import './Filter.scss';

export const Filter = (props) => {
	const [inputFocus, setInputFocus] = useState('');
	// const filterWidth = useRef(null)

	useEffect(() => {
		setInputFocus(document.activeElement);
	}, [inputFocus]);

	const onInputFocus = () => {
		setInputFocus(document.activeElement);
	};
	const onInputBlur = () => {
		setInputFocus('');
	};

	const setStyleOnFocus = () => {
		// if (document.activeElement !== inputFocus)
		// 	return { background: '#ffff' };
		// else return { background: '#ebebeb' };
	};

	return (
		<React.Fragment>
			<form className='filter' style={{ width: inputFocus.name ? ' 900px' : '' }}>
				<div className='search-inputs'>
					<label htmlFor='location'> Location </label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='location'
						id='location'
						placeholder='Where are you going?'
					/>
				</div>
				<div className='search-inputs'>
					<label htmlFor='check-in'>Check in</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='check-in'
						id='check-in'
						placeholder='Add dates'
					/>
				</div>
				<div className='search-inputs'>
					<label htmlFor='check-out'>Check out</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='check-out'
						id='check-out'
						placeholder='Add dates'
					/>
				</div>

				<div
					className='search-inputs'
				>
					<label htmlFor='guests'>Guests</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='guests'
						id='guests'
						placeholder='Add guests'
					/>
					<div className='search-button'>
						<button
							className='flex-center'
							style={{ width: inputFocus.name ? '100px' : '' }}
						>
							<MagnifyingGlass fill='white' />
							{inputFocus.name ? 'Search' : ''}
						</button>
					</div>
				</div>
			</form>
		</React.Fragment>
	);
};
