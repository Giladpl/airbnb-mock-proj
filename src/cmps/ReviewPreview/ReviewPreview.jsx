

import './ReviewPreview.scss'

export const ReviewPreview = ({ review }) => {

    return (
        <article className="review-preview">
            <div className="user-container flex">
                <img src={review.by.imgUrl} alt="" />
                <div>
                    <h3>{review.by.fullname}</h3>
                    <p>{review.createAt}</p>
                </div>
            </div>
            <p>{review.txt}</p>
        </article>
    )
}

