import { StayPreview } from '../StayPreview';
import './StayList.scss';

export const StayList = ({ stays }) => {
	return (
		<ul className='stay-list main-layout clean-list'>
			{stays && stays.map((stay) => <StayPreview key={stay._id} stay={stay} />)}
		</ul>
	);
};
