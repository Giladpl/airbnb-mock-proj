import { useSelector } from "react-redux";
import { ProfitsChart } from "../../cmps/ProfitsChart";
import { StatusChart } from "../../cmps/StatusChart";
import { DateChart } from "../../cmps/DateChart";
import { ChartMonthlyAvailability } from "../../cmps/ChartMonthlyAvailability";
import "./UserStatistics.scss";

export const UserStatistics = (props) => {
	const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
	const orders = useSelector((state) => state.orderReducer.orders);
	const userOrders = orders.filter(
		(order) => order.state.hostId === loggedinUser._id
	);

	const ordersByStay = userOrders.reduce((acc, order) => {
		const currOrderDates = {
			startDate: order.startDate,
			endDate: order.endDate,
			stayName: order.state.name,
			stayId: order.state._id,
		};

		if (order.status === "confirmed") {
			if (!acc[order.state._id]) {
				acc[order.state._id] = [];
				acc[order.state._id].push(currOrderDates);
			} else acc[order.state._id].push(currOrderDates);
		}

		return acc;
	}, {});

	console.log(ordersByStay);
	return (
		<section className='user-statistics main-layout grid'>
			<div className='status-chart'>
				<StatusChart userOrders={userOrders} />
			</div>
			<div className='date-chart'>
				<DateChart userOrders={userOrders} />
			</div>
			<div className='num-stays card flex-column flex-center'>
				<h3>Number of stays:</h3>
				<p>{Object.values(ordersByStay).length}</p>
			</div>
			<div className='profits-chart card'>
				<ProfitsChart userOrders={userOrders} />
			</div>
			<div className='num-orders card flex-column flex-center'>
				<h3>Number of orders:</h3>
				<p>{userOrders.length}</p>
			</div>
			<div className='monthly-availability-chart'>
				{Object.values(ordersByStay).map((ordersStay) => (
					<ChartMonthlyAvailability
						ordersByStay={ordersStay}
						stayName={ordersStay[0].stayName}
						key={ordersStay[0].stayId}
					/>
				))}
			</div>
			<div className='num card flex-column flex-center'>
				<h3>Number of orders:</h3>
				<p>{userOrders.length}</p>
			</div>
		</section>
	);
};
