import { Link } from 'react-router-dom';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import { stayService } from '../../services/stayService';
import { ImageSwiper } from '../../cmps/ImageSwiper';
import React from 'react';

import './StayPreview.scss';

export const StayPreview = ({ item, isExplore = false }) => {
	function propertyFormatted(property, content) {
		if (!property) return;
		content = property === 1 ? content : content + 's';
		return property + ' ' + content;
	}

	const avrgRate = stayService.getTotalAvgRate(item);

	const location = <p key='location'>{item.loc.address}</p>;

	const summery = (
		<p className='summery' key='summery'>
			{item.summary}
		</p>
	);
	const rate = (
		<div className='rate' key='rate'>
			<StarSvg fill='#FF385C' /> {avrgRate} ({item.reviews.length})
		</div>
	);

	const price = (
		<p className='price' key='price'>
			<span>${item.price}</span> / night{' '}
		</p>
	);

	const priceRateContainer = (
		<div className='price-rate-container flex-between' key='priceRateContainer'>
			{rate}
			{price}
		</div>
	);

	const name = (
		<p className='name' key='name'>
			{item.name}
		</p>
	);

	const amenities = (
		<ul className='flex amenities' key='amenities'>
			{item.amenities
				.map((amenity, idx) => (
					<li className='clean-list' key={idx}>
						{idx !== item.amenities.length - 3 ? amenity + ' ∙ ' : amenity}
					</li>
				))
				.splice(0, 4)}
		</ul>
	);

	const properties = (
		<div className='property-container properties flex' key='properties'>
			<div>{propertyFormatted(item.properties.accommodates, 'guest')} ∙</div>
			<div>{item.properties.type} ∙</div>
			<div>{propertyFormatted(item.properties.bad, 'bad')} ∙</div>
			<div>{propertyFormatted(item.properties.bath, 'bath')}</div>
		</div>
	);

	const divider = <div className='divider' key={'divider'}></div>;

	return (
		<li className={isExplore ? 'stay-preview-explore clean-list' : 'stay-preview clean-list'}>
			<Link to={'/stay/' + item._id}>
				<ImageSwiper
					imgUrls={item.imgUrls}
					style={isExplore ? { width: 300 + 'px', height: 200 + 'px' } : null}
				/>
			</Link>
			<div className='content-container'>
				{isExplore
					? [name, divider, properties, amenities, priceRateContainer]
					: [rate, location, price, summery]}
			</div>
		</li>
	);
};
