import './StayPreview.scss';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';

// import starSvg from '../../assets/svgs/star.svg'

export const StayPreview = ({ location, summary, price, reviews, imgs }) => {
	const avrgRate = reviews.reduce((acc, review) => {
		return (acc += review.rate / reviews.length);
	}, 0);

	return (
		//
		<li className='stay-preview'>
			<img src={imgs[0]} alt='' />
			<div>
				<StarSvg fill='#FF385C' /> {avrgRate} ({reviews.length})
			</div>
			<p>{location.address}</p>
			<p>{summary}</p>
			<p>Price per night</p>
		</li>
	);
};

// <li>
//  	<img src={imgs[0]} alt='' />
//      <p>{location.address}</p>
//      <p>Name:</p>
//      <p>props</p>
//  	<p>
//  		Rate: {avrgRate} ({reviews.length})
//  	</p>
//  	<p>Price</p>
//  </li>
