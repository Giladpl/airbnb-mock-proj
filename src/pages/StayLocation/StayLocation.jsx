import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { picService } from '../../services/picService';
import { GenericList } from '../../cmps/GenericList';
import { StayPreview } from '../../cmps/StayPreview';
import { StayMap } from '../../cmps/StayMap';
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

	const staysForMap = stays.map((stay) => {
		return { lat: stay.loc.lat, lng: stay.loc.lng, price: stay.price };
	});

	return (
		heroPic && (
			<section className='stay-location'>
				<img src={heroPic} alt='' />
				<h1 className='flex-center'>Explore {headerTitle()}</h1>
				<div className='list-map-container'>
					<GenericList
						items={stays}
						CmpToRender={StayPreview}
						isExplore={true}
						classNames={'explore-ul'}
					></GenericList>
					<StayMap staysForMap={staysForMap}></StayMap>
				</div>
			</section>
		)
	);
};
