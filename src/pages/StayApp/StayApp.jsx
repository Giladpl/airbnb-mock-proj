import { useSelector } from 'react-redux';
import { StayList } from '../../cmps/StayList';
import './StayApp.scss';

export const StayApp = (props) => {
	const stays = useSelector((state) => state.stayReducer.stays);
	return (
		<section>
			<h1>In StayApp</h1>
			<StayList stays={stays} />
		</section>
	);
};
