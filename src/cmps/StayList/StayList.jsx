import { StayPreview } from '../StayPreview';
import './StayList.scss';

export const StayList = ({ stays }) => {
    console.log(stays);
	return (
		<ul>
			{stays &&
				stays.map((stay) => (
					<StayPreview
						key={stay._id}
						location={stay.location}
						summery={stay.summery}
						price={stay.price}
						reviews={stay.reviews}
						imgs={stay.imgUrls}
					/>
				))}
		</ul>
	);
};
