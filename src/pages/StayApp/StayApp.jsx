// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StayList } from '../../cmps/StayList';
import './StayApp.scss';

export const StayApp = (props) => {
	const stays = useSelector((state) => state.stayReducer.stays);

	return (
		<section>
			<StayList stays={stays} />
		</section>
	);
};
