import './ReviewPreview.scss'
import Moment from 'react-moment'
import 'moment-timezone';

export const ReviewPreview = ({ item }) => {

    return (
        <article className="review-preview">
            <div className="user-container flex">
                <img src={item.by.imgUrl} alt="" />
                <div>
                    <h3>{item.by.fullname}</h3>
                    <p><Moment fromNow>{item.createAt}</Moment></p>
                </div>
            </div>
            <p>{item.txt}</p>
        </article>
    )
}

