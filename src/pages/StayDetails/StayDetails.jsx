import './StayDetails.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReviewList } from '../../cmps/ReviewList/ReviewList';
import { getStayById } from '../../store/actions/stayActions';
import { AmenityList } from '../../cmps/AmenityList/AmenityList';

export const StayDetails = ({ match }) => {
	const dispatch = useDispatch();
	const [currStay, setCurrStay] = useState(null);

	useEffect(() => {
		(async () => setCurrStay(await dispatch(getStayById(match.params.id))))();
	}, [match.params.id, dispatch]);

	return (
		currStay && (
			<section className='stay-details'>
				<h1>{currStay.name}</h1>
				<div className='img-container'>
					{currStay.imgUrls.map((imgUrl) => (
						<img src={imgUrl} alt='' />
					))}
				</div>
				<div className='host-container'>
					<h3>Hosted by {currStay.host.fullname}</h3>
					<img src={currStay.host.imgUrl} alt='' />
				</div>
				<div>
					{currStay.properties.accommodates} guest
					{currStay.properties.type}
					{currStay.properties.bed} bed
					{currStay.properties.bath} bath
				</div>
				<p className='summary'>{currStay.summary}</p>
                <AmenityList amenities={currStay.amenities} />
				<div className='reviews'>
					<h3>Rate</h3>
					<div className='rate-list'></div>
					<ReviewList reviews={currStay.reviews} />
				</div>
			</section>
		)
	);
};
