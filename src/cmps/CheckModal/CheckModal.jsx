import './CheckModal.scss'
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import downArrow from '../../assets/img/down-arrow.svg';
import upArrow from '../../assets/img/up-arrow.svg';
import { GuestModal } from '../GuestModal/GuestModal';


export const CheckModal = ({ stay, avgRate }) => {
    const dispatch = useDispatch();
    const [isGuestModal, setIsGuestModal] = useState(false);

    return (
        <section>
            <div className="check-modal">
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
                    <div className="low-container flex-between" onClick={()=> setIsGuestModal(!isGuestModal)}>
                        <div className="flex-column">
                            GUESTS
                            <p>1 guest</p>
                        </div>
                        <img src={isGuestModal ? upArrow : downArrow} alt="" />
                    </div>
                </div>
                <button>Check availability</button>
            </div>
            {isGuestModal && <GuestModal />}
        </section>
    )
}

