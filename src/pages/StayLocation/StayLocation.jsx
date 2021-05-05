import { useEffect, useState } from 'react';
import { picService } from '../../services/picService';
import './StayLocation.scss';

export const StayLocation = ({ match }) => {
	const [heroPic, setHeroPic] = useState('');

	const headerTitle = () => {
        const locName = match.params.location
        return locName.charAt(0).toUpperCase() + locName.slice(1)
    }

	useEffect(() => {
		picService.getPicture(match.params.location).then((url) => setHeroPic(url));
	}, [match.params.location]);

	return (
		heroPic && (
			<section className="stay-location main-layout">
				<img src={heroPic} alt='' />
				<h1 className="flex-center">Explore {headerTitle()}</h1>
			</section>
		)
	);
};
