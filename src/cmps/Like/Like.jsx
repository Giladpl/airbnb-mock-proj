import { ReactComponent as HeartEmpty } from '../../assets/svgs/heart-empty.svg';
import { ReactComponent as HeartFull } from '../../assets/svgs/heart-full.svg';

import './Like.scss';

export const Like = ({ isLiked, onClick }) =>
	isLiked ? (
		<HeartFull className='like' fill='#FF385C' onClick={onClick} />
	) : (
		<HeartEmpty className='like' onClick={onClick} />
	);
