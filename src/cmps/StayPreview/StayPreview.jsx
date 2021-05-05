import { Link } from 'react-router-dom';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import './StayPreview.scss';

// import starSvg from '../../assets/svgs/star.svg'

export const StayPreview = ({ stay }) => {
	const avrgRate = stay.reviews.reduce((acc, review) => {
		return (acc += review.rate / stay.reviews.length).toFixed(2);
	}, 0);

	return (
		<Link to={'/stay/' + stay._id}>
			<li className='stay-preview'>
				<img src={stay.imgUrls[0]} alt='' />
				<div>
					<StarSvg fill='#FF385C' /> {avrgRate} ({stay.reviews.length})
				</div>
				<p>{stay.loc.address}</p>
				<p>{stay.summary}</p>
				<p>Price per night</p>
			</li>
		</Link>
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
