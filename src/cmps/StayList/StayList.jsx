import { StayPreview } from '../StayPreview';
import './StayList.scss';

export const StayList = ({ stays }) => {
	return (
		<ul className="stay-list clean-list">
			{stays &&
				stays.map((stay) => (
					<StayPreview
						key={stay._id}
						location={stay.loc}
						summary={stay.summary}
						price={stay.price}
						reviews={stay.reviews}
						imgs={stay.imgUrls}
					/>
				))}
		</ul>
	);
};
