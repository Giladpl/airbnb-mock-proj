import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ReactComponent as MagnifyingGlass } from '../../assets/svgs/magnifying-glass.svg';
import { GuestModal } from '../GuestModal/GuestModal';
import { RangeDatePicker } from '../../cmps/RangeDatePicker';

import './Filter.scss';

export const Filter = ({ style }) => {
	const [inputFocus, setInputFocus] = useState('');
	const [focusedInput, setFocusedInput] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	let [isGuestModal, setIsGuestModal] = useState(false);
	let [guestNum, setGuestNum] = useState({
		Adults: 0,
		Children: 0,
		Infants: 0,
	});

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

	function updateNumOfGuests(operator, type) {
		console.log(guestNum);
		if (operator === '-' && guestNum[type] === 0) return;
		if (operator === '-') setGuestNum(--guestNum[type]);
		else setGuestNum(++guestNum[type]);
		console.log(guestNum);
	}

	const handleFocusChange = (focusedInput) => {
		setFocusedInput(focusedInput);
	};

	const handleDatesChange = ({ startDate, endDate }) => {
		setStartDate(startDate);
		setEndDate(endDate);
	};

	return (
		<React.Fragment>
			<RangeDatePicker
				handleFocusChange={handleFocusChange}
				focusedInput={focusedInput}
				handleDatesChange={handleDatesChange}
				setEndDate={setEndDate}
				setStartDate={setStartDate}
				endDate={endDate}
				startDate={startDate}
			/>
			<form
				className='filter'
				style={{
					width: inputFocus.name ? ' 900px' : '',
					opacity: style.opacity,
				}}
			>
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
				<div
					className='search-inputs'
					onClick={() => setFocusedInput('startDate')}
				>
					<label htmlFor='check-in'>Check in</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='check-in'
						id='check-in'
						placeholder='Add dates'
						defaultValue={startDate?._d.toDateString().substr(0, 10) || ''}
					/>
				</div>
				<div
					className='search-inputs'
					onClick={() => setFocusedInput('endDate')}
				>
					<label htmlFor='check-out'>Check out</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='check-out'
						id='check-out'
						placeholder='Add dates'
						defaultValue={endDate?._d.toDateString().substr(0, 10) || ''}
					/>
				</div>

				<div className='search-inputs'>
					<label htmlFor='guests'>Guests</label>
					<input
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						onClick={() => setIsGuestModal(!isGuestModal)}
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
			{isGuestModal && (
				<GuestModal
					className='guests-modal'
					guestNum={guestNum}
					updateNumOfGuests={updateNumOfGuests}
				/>
			)}
		</React.Fragment>
	);
};
