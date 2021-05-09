import { Link } from 'react-router-dom';
import { stayService } from '../../services/stayService';
import { ImageSwiper } from '../../cmps/ImageSwiper';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import './StayPreview.scss';

// import starSvg from '../../assets/svgs/star.svg'

export const StayPreview = ({ stay, children }) => {
	const avrgRate = stayService.getTotalAvgRate(stay);

	return (
		<li className='stay-preview'>
			<Link to={'/stay/' + stay._id}>
				{/* <img src={stay.imgUrls[0]} alt='' /> */}
				<ImageSwiper imgUrls={stay.imgUrls} />
				<div className='rate'>
					<StarSvg fill='#FF385C' /> {avrgRate} ({stay.reviews.length})
				</div>
				<p className='summery'>{stay.summary}</p>
				{children}
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
