import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { picService } from '../../services/picService';
import { GenericList } from '../../cmps/GenericList';
import { StayPreview } from '../../cmps/StayPreview';
import { StayMap } from '../../cmps/StayMap';
// import { loadStays } from '../../store/actions/stayActions';
import './StayLocation.scss';

export const StayLocation = ({ match }) => {
	const [heroPic, setHeroPic] = useState('');
	// const dispatch = useDispatch();
	const stays = useSelector((state) => state.stayReducer.stays);

	const headerTitle = () => {
		const locName = match.params.location;
		return locName.charAt(0).toUpperCase() + locName.slice(1);
	};

	useEffect(() => {
		picService.getPicture(match.params.location).then((url) => setHeroPic(url));
		// (async ()=> await dispatch(loadStays(match.params.location)))()
	}, [match.params.location]);

	const staysForMap = stays.map((stay) => {
		return { lat: stay.loc.lat, lng: stay.loc.lng, price: stay.price };
	});

	return (
		<section className='stay-location'>
			{heroPic && <img src={heroPic} alt='' />}
			<h1 className='flex-center'>Explore {headerTitle()}</h1>
			{stays && (
				<div className='list-map-container'>
					<GenericList
						items={stays}
						CmpToRender={StayPreview}
						isExplore={true}
						classNames={'explore-ul'}
					></GenericList>
					<StayMap staysForMap={staysForMap}></StayMap>
				</div>
			)}
		</section>
	);
};
