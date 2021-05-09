import React from 'react';
import { ReactComponent as MagnifyingGlass } from '../../assets/svgs/magnifying-glass.svg';

import './Filter.scss';

export const Filter = (props) => {
	return (
		<React.Fragment>
			<form className='filter'>
				<div className='search-inputs'>
					<label htmlFor='location'> Location </label>
					<input
						name='location'
						id='location'
						placeholder='Where are you going?'
					/>
				</div>
				<div className='search-inputs'>
					<label htmlFor='check-in'>Check in</label>
					<input name='check-in' id='check-in' placeholder='Add dates' />
				</div>
				<div className='search-inputs'>
					<label htmlFor='check-out'>Check out</label>
					<input name='check-out' id='check-out' placeholder='Add dates' />
				</div>
				<div className='search-inputs'>
					<label htmlFor='guests'>Guests</label>
					<input name='guests' id='guests' placeholder='Add dates' />
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
