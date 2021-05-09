import './ReviewPreview.scss'
import Moment from 'react-moment'
import 'moment-timezone';

export const ReviewPreview = ({ review }) => {

    return (
        <article className="review-preview">
            <div className="user-container flex">
                <img src={review.by.imgUrl} alt="" />
                <div>
                    <h3>{review.by.fullname}</h3>
                    <p><Moment fromNow>{review.createAt}</Moment></p>
                </div>
            </div>
            <p>{review.txt}</p>
        </article>
    )
}

