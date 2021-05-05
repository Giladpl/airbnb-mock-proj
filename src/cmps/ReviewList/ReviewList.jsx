import './ReviewList.scss'
import { ReviewPreview } from '../ReviewPreview'

export const ReviewList = ({ reviews }) => {

    return (
        reviews && <div className="review-list">
            {reviews.map(review => <ReviewPreview key={review.id} review={review} />)}
        </div>
    )
}

