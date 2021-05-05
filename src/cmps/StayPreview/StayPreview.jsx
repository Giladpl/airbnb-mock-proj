import './StayPreview.scss';

export const StayPreview = ({ location, summary, price, reviews, imgs }) => {
	const avrgRate = reviews.reduce((acc, review) => {
		return (acc += review.rate / reviews.length);
	}, 0);

	return (
		<li>
			<img src={imgs[0]} alt='' />
			<p>
				Rate: {avrgRate} ({reviews.length})
			</p>
			<p></p>
		</li>
	);
};
