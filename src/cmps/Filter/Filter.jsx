import React, { useEffect, useState } from 'react';
import { ReactComponent as MagnifyingGlass } from '../../assets/svgs/magnifying-glass.svg';
import { GuestModal } from '../GuestModal/GuestModal';
import { RangeDatePicker } from '../../cmps/RangeDatePicker';
import { FilterLocationsModal } from '../FilterLocationsModal/FilterLocationsModal';
import { useHistory } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
// import moment from 'moment';
// import { loadStays } from '../../store/actions/stayActions';
// import { useDispatch } from 'react-redux';

import './Filter.scss';

export const Filter = ({ style, stays }) => {
	const history = useHistory();
	// const dispatch = useDispatch();

	const [inputFocus, setInputFocus] = useState('');
	const [focusedInput, setFocusedInput] = useState(null);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [filterBy, setFilterBy] = useState({
		location: '',
		'check-in': null,
		'check-out': null,
		guests: null,
	});
	const [isFilterLocModalOpen, setIsFilterLocModalOpen] = useState(false);
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

	function updateNumOfGuests(operator, type) {
		if (operator === '-' && guestNum[type] === 0) return;
		if (operator === '-') setGuestNum(--guestNum[type]);
		else setGuestNum(++guestNum[type]);
	}

	const handleFocusChange = (focusedInput) => {
		setFocusedInput(focusedInput);
	};

	const handleDatesChange = ({ startDate, endDate }) => {
		setStartDate(startDate);
		setEndDate(endDate);
		setFilterBy({
			...filterBy,
			'check-in': startDate._d.getTime(),
			'check-out': startDate._d.getTime(),
		});
	};

	const handleChange = ({ target }) => {
		const field = target.name;
		let value = target.value;
		setFilterBy({ ...filterBy, [field]: value });
	};

	const onSubmit = async (ev) => {
		ev.preventDefault();
		if (!filterBy.location) return;
		history.push('/stay/explore/' + filterBy.location);
		// history.push('/stay')
	};

	const setLocation = (location) => {
		setFilterBy({ ...filterBy, location });
	};
	return (
		<React.Fragment>
			<RangeDatePicker
				classNames='date-picker-filter'
				handleFocusChange={handleFocusChange}
				focusedInput={focusedInput}
				handleDatesChange={handleDatesChange}
				endDate={endDate}
				startDate={startDate}
				small={true}
			/>
			<form
				onSubmit={onSubmit}
				className='filter'
				style={{
					width: inputFocus.name ? ' 900px' : '',
					opacity: style.opacity,
				}}
			>
				<div
					className='search-inputs flex-column'
					onClick={() => setIsFilterLocModalOpen(true)}
				>
					<label htmlFor='location'> Location </label>
					<input
						list='location-options'
						onFocus={onInputFocus}
						onBlur={onInputBlur}
						name='location'
						id='location'
						placeholder='Where are you going?'
						value={filterBy.location}
						onChange={handleChange}
					/>
					<OutsideClickHandler
						onOutsideClick={() => {
							setIsFilterLocModalOpen(false);
						}}
					>
						{isFilterLocModalOpen && filterBy.location && (
							<FilterLocationsModal
								stays={stays}
								location={filterBy.location}
								setLocation={setLocation}
							/>
						)}{' '}
					</OutsideClickHandler>
				</div>
				<div
					className='search-inputs flex-column'
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
					className='search-inputs flex-column'
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

				<div
					className='search-inputs flex-between'
					style={{ width: inputFocus.name ? '270px' : '220px' }}
				>
					<div className='flex-column'>
						<label htmlFor='guests'>Guests</label>
						<input
							onFocus={onInputFocus}
							onBlur={onInputBlur}
							onClick={() => setIsGuestModal(!isGuestModal)}
							name='guests'
							id='guests'
							placeholder='Add guests'
						/>
					</div>
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
