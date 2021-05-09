import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { picService } from '../../services/picService';
import { StayList } from '../../cmps/StayList';
import './StayLocation.scss';

export const StayLocation = ({ match }) => {
	const [heroPic, setHeroPic] = useState('');
	const stays = useSelector((state) => state.stayReducer.stays);

	const headerTitle = () => {
		const locName = match.params.location;
		return locName.charAt(0).toUpperCase() + locName.slice(1);
	};

	useEffect(() => {
		picService.getPicture(match.params.location).then((url) => setHeroPic(url));
	}, [match.params.location]);

	return (
		heroPic && (
			<section className='stay-location main-layout'>
				<img src={heroPic} alt='' />
				<h1 className='flex-center'>Explore {headerTitle()}</h1>
				<StayList stays={stays}></StayList>
			</section>
		)
	);
};
