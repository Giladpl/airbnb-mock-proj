import './MainHeader.scss';

export const MainHeader = ({ isMainHeader }) => {
	const covidHeader = <p>Get the latest on our COVID-19 response</p>;
	// const mainHeader;

	return (
		<header className= {isMainHeader ? 'main-header' : 'covid-header flex-center'}>
			{isMainHeader ? 'Main Header' : covidHeader}
		</header>
	);
};
