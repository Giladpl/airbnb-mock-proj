import './CheckModal.scss';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import downArrow from '../../assets/img/down-arrow.svg';
import upArrow from '../../assets/img/up-arrow.svg';
import { GuestModal } from '../GuestModal/GuestModal';
import { ButtonGradientTracking } from '../ButtonGradientTracking';
// import { DateRangePicker } from 'react-dates';

export const CheckModal = ({ stay, avgRate }) => {
	const dispatch = useDispatch();
	let [isGuestModal, setIsGuestModal] = useState(false);
	let [guestNum, setGuestNum] = useState({
		Adults: 0,
		Children: 0,
		Infants: 0,
	});
	let [startDatePicker, setStartDate] = useState(null);
	let [endDatePicker, setEndDate] = useState(null);
	let [focusedInputPicker, setFocusedInput] = useState(null);

	function updateNumOfGuests(operator, type) {
		if (operator === '-' && !guestNum[type]) return;
		if (operator === '-')
			setGuestNum({ ...guestNum, [type]: --guestNum[type] });
		else setGuestNum({ ...guestNum, [type]: ++guestNum[type] });
	}

	return (
		<section>
			<div className='check-modal'>
				<div className='title flex-between'>
					<div>
						<span className='price'>${stay.price}</span> / night
					</div>
					<div className='flex'>
						<StarSvg fill='#FF385C' /> {avgRate} ({stay.reviews.length} reviews)
					</div>
				</div>
				<div className='main-content flex-column'>
					<div className='top-container flex'>
						<div className='check-in'>
							CHECK-IN
							<p>Add Date</p>
						</div>
						<div className='checkout'>
							CHECKOUT
							<p>Add Date</p>
						</div>
					</div>
					<div
						className='low-container flex-between'
						onClick={() => setIsGuestModal(!isGuestModal)}
					>
						<div className='flex-column'>
							GUESTS
							<p>{guestNum.Adults + guestNum.Children + guestNum.Infants}</p>
						</div>
						<img src={isGuestModal ? upArrow : downArrow} alt='' />
					</div>
				</div>
				{/* <button>Check availability</button> */}
				<ButtonGradientTracking/>
			</div>
			{isGuestModal && (
				<GuestModal guestNum={guestNum} updateNumOfGuests={updateNumOfGuests} />
			)}
			{/* <DateRangePicker
                startDate={startDatePicker} 
                startDateId="startDate" 
                endDate={endDatePicker} 
                endDateId="endDate"
                onDatesChange={({ startDate, endDate }) => setStartDate(startDate)}
                focusedInput={focusedInputPicker} 
                onFocusChange={focusedInput => setFocusedInput(focusedInput)} 
            /> */}
		</section>
	);
};
