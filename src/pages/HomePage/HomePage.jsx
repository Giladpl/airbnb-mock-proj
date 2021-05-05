import { useEffect } from 'react';
import './HomePage.scss';
import { loadStays } from '../../store/actions/stayActions';
import { useDispatch } from 'react-redux';

export const HomePage = (props) => {
	const dispatch = useDispatch();
	
	useEffect(() => {
		dispatch(loadStays());

	}, [dispatch]);

	return <main className='home-page'>Home sweet home</main>;
};
