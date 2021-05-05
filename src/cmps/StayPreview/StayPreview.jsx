import { Link } from 'react-router-dom';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import './StayPreview.scss';

// import starSvg from '../../assets/svgs/star.svg'

export const StayPreview = ({ stay }) => {
	const avrgRate = stay.reviews.reduce((acc, review) => {
		return (acc += review.rate / stay.reviews.length).toFixed(2);
	}, 0);

	return (
		<li className='stay-preview'>
			<Link to={'/stay/' + stay._id}>
				<img src={stay.imgUrls[0]} alt='' />
				<div className='rate'>
					<StarSvg fill='#FF385C' /> {avrgRate} ({stay.reviews.length})
				</div>
				<p>{stay.loc.address}</p>
				<p className='summery'>{stay.summary}</p>
				<p>
					<span className='price'>${stay.price}</span> / night{' '}
				</p>
			</Link>
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
