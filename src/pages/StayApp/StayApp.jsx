// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StayList } from '../../cmps/StayList';
import { StayPreview } from '../../cmps/StayPreview';
import { GenericList } from '../../cmps/GenericList';
import './StayApp.scss';

export const StayApp = (props) => {
	const stays = useSelector((state) => state.stayReducer.stays);

	return (
		<section>
			<GenericList items={stays} CmpToRender = {StayPreview} classNames={'stay-list'}>
			</GenericList>
		</section>
	);
};
