import { GuestModalPreview } from '../GuestModalPreview/GuestModalPreview';
import './GuestModal.scss';

export const GuestModal = ({ guestNum, updateNumOfGuests, isFixed }) => {
	return (
		<section
			className='guest-modal'
			style={{
				position: isFixed ? 'fixed' : 'relative',
				top: isFixed ? '48%' : '-19%',
			}}
		>
			<GuestModalPreview
				title='Adults'
				desc='Ages 13 or above'
				num={guestNum.Adults}
				updateNumOfGuests={updateNumOfGuests}
			/>
			<GuestModalPreview
				title='Children'
				desc='Ages 2-12'
				num={guestNum.Children}
				updateNumOfGuests={updateNumOfGuests}
			/>
			<GuestModalPreview
				title='Infants'
				desc='Under 2'
				num={guestNum.Infants}
				updateNumOfGuests={updateNumOfGuests}
			/>
		</section>
	);
};
