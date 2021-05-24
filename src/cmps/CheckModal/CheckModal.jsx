import './CheckModal.scss';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import { useState } from 'react';
import downArrow from '../../assets/img/down-arrow.svg';
import upArrow from '../../assets/img/up-arrow.svg';
import { GuestModal } from '../GuestModal/GuestModal';
import { ButtonGradientTracking } from '../ButtonGradientTracking';
// import { DateRangePicker } from 'react-dates';
import { RangeDatePicker } from '../../cmps/RangeDatePicker';

export const CheckModal = ({ stay, avgRate }) => {
    let [isGuestModal, setIsGuestModal] = useState(false);
    let [guestNum, setGuestNum] = useState({
        Adults: 0,
        Children: 0,
        Infants: 0,
    });
    let [focusedInput, setFocusedInput] = useState(null);
    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState(null);

    const handleFocusChange = (focusedInput) => {
        setFocusedInput(focusedInput);
    };

    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };

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
                        <div className='check-in' onClick={() => setFocusedInput('startDate')}>
                            CHECK-IN
							<p>{startDate?._d.toDateString().substr(0, 10) || 'Add Date'}</p>
                        </div>
                        <div className='checkout' onClick={() => setFocusedInput('endDate')}>
                            CHECKOUT
							<p>{endDate?._d.toDateString().substr(0, 10) || 'Add Date'}</p>
                        </div>
                    </div>
                    <div
                        className='low-container flex-between'
                        onClick={() => setIsGuestModal(!isGuestModal)}
                    >
                        <div className='flex-column'>
                            GUESTS
							<p>{guestNum.Adults + guestNum.Children + guestNum.Infants} guest</p>
                        </div>
                        <img src={isGuestModal ? upArrow : downArrow} alt='' />
                    </div>
                </div>
                <ButtonGradientTracking/>
            </div>
            {isGuestModal && (
                <GuestModal guestNum={guestNum} updateNumOfGuests={updateNumOfGuests} />
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
