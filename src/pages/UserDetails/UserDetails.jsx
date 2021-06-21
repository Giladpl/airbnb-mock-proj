import { useSelector } from 'react-redux'
import { StayPreview } from '../../cmps/StayPreview'
import { GenericList } from '../../cmps/GenericList'
import './UserDetails.scss'

export const UserDetails = (props) => {
    const loggedinUser = useSelector(state => state.userReducer.loggedinUser)
    const stays = useSelector((state) => state.stayReducer.stays);
    const orders = useSelector((state) => state.orderReducer.orders);

    const userStays = stays.filter(stay => stay.host._id === loggedinUser._id)
    const userOrders = orders.filter(order => order.state.hostId === loggedinUser._id)
    console.log(userOrders);

    return (
        loggedinUser && <section className='user-details main-layout'>
            <div className='flex-between'>
                <div>
                    <img className='user-img' src={loggedinUser.imgUrl} alt="" />
                    <div>{loggedinUser.fullname}</div>
                </div>
                <div>
                    <h2>Statistics</h2>
                </div>
            </div>
            <div>
                <h2>Orders</h2>
                {/* <GenericList items={userOrders} CmpToRender={} classNames="order-list clean-list" sectionClassName="main-layout" /> */}
            </div>
            <div>
                <h2>Stays</h2>
                <GenericList items={userStays} CmpToRender={StayPreview} classNames="stay-list clean-list" sectionClassName="main-layout" />
            </div>
        </section>
    )
}

