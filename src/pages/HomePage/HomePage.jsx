import React from 'react';
import { Filter } from '../../cmps/Filter';
import './HomePage.scss';
import Hero from '../../assets/img/main-hero.jpg';

export const HomePage = (props) => {
	return (
		<React.Fragment>
			<main className='home-page'>
				<div className='hero'>
					<img src={Hero} alt='' />
					<Filter />
				</div>
			</main>
		</React.Fragment>
	);
};
