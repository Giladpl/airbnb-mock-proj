import { useState, useEffect } from 'react';
import { ReactComponent as MagnifyingGlass } from '../../assets/svgs/magnifying-glass.svg';
import { Filter } from '../Filter';
import OutsideClickHandler from 'react-outside-click-handler';
import './MainHeader.scss';
import { useSelector } from 'react-redux';

export const MainHeader = () => {
	let [isFilter, setIsFilter] = useState(false);
	const [isMainHeader, setIsMainHeader] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset >= 64 && !isMainHeader) {
				setIsMainHeader(true);
			} else if (window.pageYOffset < 64 && isMainHeader) {
				setIsMainHeader(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isMainHeader]);

	const stays = useSelector((state) => state.stayReducer.stays);

	const covidHeader = <p>Get the latest on our COVID-19 response</p>;
	const mainHeader = (
		<form className='search-form flex' onClick={() => setIsFilter(!isFilter)}>
			<input type='text' placeholder='Start your search' />
			<div className='search-button'>
				<button className='flex-center'>
					<MagnifyingGlass fill='white' />
				</button>
			</div>
		</form>
	);
	return (
		<header>
			{!isFilter && (
				<div
					className={
						isMainHeader
							? 'main-header flex-center'
							: 'covid-header flex-center'
					}
				>
					{isMainHeader ? mainHeader : covidHeader}
				</div>
			)}
			{isFilter && (
				<div className='main-header filter-header flex-column'>
					{mainHeader}
					<OutsideClickHandler onOutsideClick={() => setIsFilter(false)}>
						<Filter stays={stays} style={{ background: 'gray' }} />
					</OutsideClickHandler>
				</div>
			)}
		</header>
	);
};
