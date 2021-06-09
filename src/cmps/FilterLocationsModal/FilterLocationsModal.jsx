import { useEffect, useState } from 'react';
import './FilterLocationsModal.scss';


export const FilterLocationsModal = ({ stays, setLocation, location }) => {
    const [options, setOptions] = useState([]);
    
	useEffect(() => {
        setOptions(getOptions(stays));
	}, [stays]);
    
    console.log(location);

	return (
        <ul className='options-list clean-list'>
			{options.map((option) => (
				<li key={option} onClick={() => setLocation(option)}>
					{option}
				</li>
			))}
		</ul>
	);
};

function getOptions(stays) {
    if (!stays) return;
    const addresses = stays.map((stay) => stay.loc.address);
    const set = new Set(addresses);
    return [...set].map((address) => address);
}

// const getDataOptions = () => {
//     // const addressesMap = stays.reduce((addressesMap, stay, idx) => {
    //     // 	if (!addressesMap[stay.loc.address]) addressesMap[stay.loc.address] = idx;
    //     // 	return addressesMap;
//     // }, {});
//     // return Object.keys(addressesMap).map((address, idx) => (
//     // 	<option key={idx} value={address}>
//     // 		{' '}
//     // 	</option>
//     // ));
// };
