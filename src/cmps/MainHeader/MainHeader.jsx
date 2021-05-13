import { ReactComponent as MagnifyingGlass } from '../../assets/svgs/magnifying-glass.svg';
import './MainHeader.scss';

export const MainHeader = ({ isMainHeader }) => {
	const covidHeader = <p>Get the latest on our COVID-19 response</p>;
	const mainHeader = (
		<form className='search-form flex'>
			<input type='text' placeholder='Start your search'/>
			<div className='search-button'>
				<button className='flex-center'>
					<MagnifyingGlass fill='white' />
				</button>
			</div>
		</form>
	);

	return (
		<header
			className={isMainHeader ? 'main-header flex-center' : 'covid-header flex-center'}
		>
			{isMainHeader ? mainHeader : covidHeader}
		</header>
	);
};
