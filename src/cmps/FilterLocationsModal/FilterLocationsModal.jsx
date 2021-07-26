import { useEffect, useState } from 'react';
import PinSvg from '../../assets/svgs/pin.svg';
import './FilterLocationsModal.scss';

export const FilterLocationsModal = ({ stays, setLocation, location }) => {
	const [options, setOptions] = useState([]);
	const [filteredOptions, setFilteredOptions] = useState([]);

	useEffect(() => {
		setOptions(getOptions(stays));
	}, [stays]);

	useEffect(() => {
		const regex = new RegExp(location.trim(), 'i');
		const optionsToReturn = options
			.filter((option) => regex.test(option))
			.slice(0, 5);
		setFilteredOptions(optionsToReturn);
	}, [location, options]);

	return (
		<ul className='clean-list options-list'>
			{filteredOptions.map((option) => (
				<li key={option} onClick={() => setLocation(option)} className='flex'>
					<img src={PinSvg} alt='pin-svg' />{' '}
					<p className='flex-center'>{option}</p>
				</li>
			))}
		</ul>
	);
};

function getOptions(stays) {
	if (!stays) return;
	const addresses = stays.map((stay) => stay.loc.address);
	const set = new Set(addresses);
	return [...set];
	// return [...set].map((address) => address);
}
