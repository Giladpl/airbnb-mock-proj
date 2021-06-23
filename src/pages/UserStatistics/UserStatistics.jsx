import { useSelector } from 'react-redux';
import { ProfitsChart } from '../../cmps/ProfitsChart'
import { StatusChart } from '../../cmps/StatusChart'
import './UserStatistics.scss'

export const UserStatistics = (props) => {
    const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
    const orders = useSelector((state) => state.orderReducer.orders);
    const userOrders = orders.filter(
		(order) => order.state.hostId === loggedinUser._id
	);

    return (
        <section className='user-statistics'>
            <ProfitsChart userOrders={userOrders} />
            <StatusChart userOrders={userOrders} />
        </section>
    )
}

