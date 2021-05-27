import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadStays } from '../../store/actions/stayActions';
import { picService } from '../../services/picService';
import { GenericList } from '../../cmps/GenericList';
import { StayPreview } from '../../cmps/StayPreview';
import { StayMap } from '../../cmps/StayMap';
import './StayLocation.scss';

export const StayLocation = ({ match }) => {
	const [heroPic, setHeroPic] = useState('');
	const dispatch = useDispatch();
	const stays = useSelector((state) => state.stayReducer.stays);
	
	useEffect(() => {
		picService.getPicture(match.params.location).then((url) => setHeroPic(url));
		const filterBy = { location: match.params.location };
		// console.log(filterBy);
		
		(async () => await dispatch(loadStays(filterBy)))();
	}, [match.params, dispatch]);

	
	const headerTitle = () => {
		const locName = match.params.location;
		return locName.charAt(0).toUpperCase() + locName.slice(1);
	};

	const staysForMap = stays.map((stay) => {
		return { lat: stay.loc.lat, lng: stay.loc.lng, price: stay.price };
	});

	return (
		<section className='stay-location'>
			{heroPic && <img src={heroPic} alt='' />}
			<h1 className='flex-center'>Explore {headerTitle()}</h1>
			{stays.length ? (
				<div className='list-map-container'>
					<GenericList
						items={stays}
						CmpToRender={StayPreview}
						isExplore={true}
						classNames={'explore-ul'}
					></GenericList>
					<StayMap staysForMap={staysForMap}></StayMap>
				</div>
			) : <div>There are no stays at this location</div>}
		</section>
	);
};
