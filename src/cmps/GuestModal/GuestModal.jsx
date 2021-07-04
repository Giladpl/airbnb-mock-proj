import { GuestModalPreview } from '../GuestModalPreview/GuestModalPreview';
import './GuestModal.scss';

export const GuestModal = ({ guestNum, updateNumOfGuests, className }) => {
	return (
		<section className={className}>
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
