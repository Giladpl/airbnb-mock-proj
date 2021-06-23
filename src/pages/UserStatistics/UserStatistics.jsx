import { useSelector } from 'react-redux';
import { ProfitsChart } from '../../cmps/ProfitsChart'
import { StatusChart } from '../../cmps/StatusChart'
import { DateChart } from '../../cmps/DateChart'
import './UserStatistics.scss'

export const UserStatistics = (props) => {
    const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
    const orders = useSelector((state) => state.orderReducer.orders);
    const userOrders = orders.filter(
		(order) => order.state.hostId === loggedinUser._id
	);

    return (
        <section className='user-statistics main-layout'>
            <StatusChart userOrders={userOrders} />
            <ProfitsChart userOrders={userOrders} />
            <DateChart userOrders={userOrders} />
        </section>
    )
}

