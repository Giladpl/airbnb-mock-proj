import './CheckModal.scss';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import { useEffect, useState } from 'react';
import downArrow from '../../assets/img/down-arrow.svg';
import upArrow from '../../assets/img/up-arrow.svg';
import { GuestModal } from '../GuestModal/GuestModal';
import { ButtonGradientTracking } from '../ButtonGradientTracking';
import { RangeDatePicker } from '../../cmps/RangeDatePicker';
import OutsideClickHandler from 'react-outside-click-handler';

export const CheckModal = ({ stay, avgRate, guestNum, updateNumOfGuests, startDate, endDate, handleDatesChange, diffInDays, calcPrice, isCheck, onCheckAvailability }) => {
	let [isGuestModal, setIsGuestModal] = useState(false);
	let [isGuestModalFixed, setIsGuestModalFixed] = useState(false);
	let [focusedInput, setFocusedInput] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			if (
				window.pageYOffset >= 520 &&
				window.pageYOffset < 900 &&
				!isGuestModalFixed
			) {
				setIsGuestModalFixed(true);
			} else if (
				(window.pageYOffset < 520 && isGuestModalFixed) ||
				(window.pageYOffset > 900 && isGuestModalFixed)
			) {
				setIsGuestModalFixed(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isGuestModalFixed]);

	const handleFocusChange = (focusedInput) => {
		setFocusedInput(focusedInput);
	};

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
						<div
							className='check-in'
							onClick={() => setFocusedInput('startDate')}
						>
							CHECK-IN
							<p>{startDate?._d.toDateString().substr(0, 10) || 'Add Date'}</p>
						</div>
						<div
							className='checkout'
							onClick={() => setFocusedInput('endDate')}
						>
							CHECKOUT
							<p>{endDate?._d.toDateString().substr(0, 10) || 'Add Date'}</p>
						</div>
					</div>
					{/* <OutsideClickHandler
						onOutsideClick={() => setIsGuestModal(false)}
					> */}
						<div
							className='low-container flex-between'
							onClick={() => setIsGuestModal(!isGuestModal)}
						>
							<div className='flex-column'>
								GUESTS
								<p>
									{guestNum.Adults + guestNum.Children + guestNum.Infants} guest
								</p>
							</div>
							<img src={isGuestModal ? upArrow : downArrow} alt='' />
						</div>
					{/* </OutsideClickHandler> */}
				</div>
				<ButtonGradientTracking isCheck={isCheck} onCheckAvailability={onCheckAvailability} />
				{isCheck && <div className='check-availability'>
					<div className='introduction'>You won't be charged yet</div>
					<div className='flex-between'>
						<div className='underline'>${stay.price} x {diffInDays} nights</div>
						<div>${calcPrice()}</div>
					</div>
					<div className='flex-between'>
						<div className='underline'>Cleaning fee</div>
						<div>$27</div>
					</div>
					<div className='flex-between'>
						<div className='underline'>Service fee</div>
						<div>$30</div>
					</div>
					<div className='total-price flex-between'>
						<div>Total</div>
						<div>${calcPrice() + 27 + 30}</div>
					</div>
				</div>}
			</div>
			{isGuestModal && (
				<GuestModal
					isFixed={isGuestModalFixed}
					guestNum={guestNum}
					updateNumOfGuests={updateNumOfGuests}
				/>
			)}
			<RangeDatePicker
				classNames='date-picker-modal'
				handleFocusChange={handleFocusChange}
				focusedInput={focusedInput}
				handleDatesChange={handleDatesChange}
				endDate={endDate}
				startDate={startDate}
			/>
		</section>
	);
};
