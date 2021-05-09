import './CheckModal.scss'
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg'

export const CheckModal = ({ stay, avgRate }) => {

    return (
        <section className="check-modal">
            <div className="title flex-between">
                <div><span className="price">${stay.price}</span> / night</div> 
                <div className="flex"><StarSvg fill='#FF385C' /> {avgRate} ({stay.reviews.length} reviews)</div>
            </div>
            <div className="main-content flex-column">
                <div className="top-container flex">
                    <div className="check-in">
                        CHECK-IN
                        <p>Add Date</p>
                    </div>
                    <div className="checkout">
                        CHECKOUT
                        <p>Add Date</p>
                    </div>
                </div>
                <div className="low-container flex-column">
                    GUESTS
                    <p>1 guest</p>
                </div>
            </div>
            <button>Check availability</button>
        </section>
    )
}

