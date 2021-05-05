

import './ReviewPreview.scss'

export const ReviewPreview = ({ review }) => {

    return (
        <article className="review-preview">
            <div className="user-container">
                <img src={review.by.imgUrl} alt=""/>
                <h3>{review.by.fullname}</h3>
                <p>{review.createAt}</p>
            </div>
            <p>{review.txt}</p>
        </article>
    )
}

