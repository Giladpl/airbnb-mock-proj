import { Link } from 'react-router-dom';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import { stayService } from '../../services/stayService';
import { ImageSwiper } from '../../cmps/ImageSwiper';
import './StayPreview.scss';

// import starSvg from '../../assets/svgs/star.svg'

export const StayPreview = ({ stay }) => {
	const avrgRate = stayService.getTotalAvgRate(stay);

	return (
		<li className='stay-preview'>
			<Link to={'/stay/' + stay._id}>
				<ImageSwiper imgUrls={stay.imgUrls} />
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
//  		<ImageSwiper imgUrls={stay.imgUrls} />
//      <p>{location.address}</p>
//      <p>Name:</p>
//      <p>props</p>
//  	<p>
//  		Rate: {avrgRate} ({reviews.length})
//  	</p>
//  	<p>Price</p>
//  </li>
