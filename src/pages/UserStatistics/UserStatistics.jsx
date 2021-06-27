import { useSelector } from 'react-redux';
import { ProfitsChart } from '../../cmps/ProfitsChart';
import { StatusChart } from '../../cmps/StatusChart';
import { DateChart } from '../../cmps/DateChart';
import { ChartMonthlyAvailability } from '../../cmps/ChartMonthlyAvailability';
import './UserStatistics.scss';

export const UserStatistics = (props) => {
	const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
	const orders = useSelector((state) => state.orderReducer.orders);
	const userOrders = orders.filter(
		(order) => order.state.hostId === loggedinUser._id
	);

<<<<<<< HEAD
	const ordersByStay = userOrders.reduce((acc, order) => {
		const currOrderDates = {
			startDate: order.startDate,
			endDate: order.endDate,
			stayName: order.state.name,
			stayId: order.state._id,
		};
		if (order.status === 'confirmed') {
			if (!acc[order.state._id]) {
				acc[order.state._id] = [];
				acc[order.state._id].push(currOrderDates);
			} else acc[order.state._id].push(currOrderDates);
		}
=======
    return (
        <section className='user-statistics'>
            <StatusChart userOrders={userOrders} />
            <ProfitsChart userOrders={userOrders} />
            <DateChart userOrders={userOrders} />
        </section>
    )
}
>>>>>>> 5df1db988b91d4cb71e9bdd77237b431cf3a7d91

		return acc;
	}, {});

	// const getOrdersByStay = () => {
	// 	return Object.values(ordersByStay).map((ordersStay) => (
	// 		<ChartMonthlyAvailability ordersByStay={ordersStay} stayName='Bla Bla' />
	// 	));
	// };

	return (
		<section className='user-statistics main-layout'>
			<StatusChart userOrders={userOrders} />
			<ProfitsChart userOrders={userOrders} />
			<DateChart userOrders={userOrders} />
			{Object.values(ordersByStay).map((ordersStay) => (
				<ChartMonthlyAvailability
					ordersByStay={ordersStay}
					stayName={ordersStay[0].stayName}
					key={ordersStay[0].stayId}
				/>
			))}
		</section>
	);
};
