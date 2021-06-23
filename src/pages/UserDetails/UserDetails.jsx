import { useDispatch, useSelector } from 'react-redux';
import { saveOrder } from '../../store/actions/orderActions';
import { StayPreview } from '../../cmps/StayPreview';
import { OrderPreview } from '../../cmps/OrderPreview';
import { GenericList } from '../../cmps/GenericList';
import './UserDetails.scss';

export const UserDetails = (props) => {
	const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
	const stays = useSelector((state) => state.stayReducer.stays);
	const orders = useSelector((state) => state.orderReducer.orders);
	const dispatch = useDispatch();

	const userStays = stays.filter((stay) => stay.host._id === loggedinUser._id);
	const userOrders = orders.filter(
		(order) => order.state.hostId === loggedinUser._id
	);

	const changeOrderStatus = (orderId, newStatus) => {
		const order = userOrders.find((order) => order._id === orderId);
		const newOrder = { ...order, status: newStatus };
		dispatch(saveOrder(newOrder));
	};

	const pendingOrdersNum = orders.filter(
		(order) => order.status === 'pending'
	).length;

	return (
		loggedinUser && (
			<section className='user-details main-layout flex-column'>
				<div className='flex-between'>
					<div className='name-pic-box flex'>
						<img className='user-img' src={loggedinUser.imgUrl} alt='' />
						<div>{loggedinUser.fullname}</div>
					</div>
				</div>
				<div className='orders-stays-box'>
					<div className='orders-list'>
						<h2>Orders</h2>
						<h4>{pendingOrdersNum} new pending orders</h4>
						<GenericList
							items={userOrders}
							CmpToRender={OrderPreview}
							classNames='order-list clean-list'
							// sectionClassName='main-layout'
							changeOrderStatus={changeOrderStatus}
						/>
					</div>
					<div className='stays-list'>
						<h2>Stays</h2>
						<h4>{userStays.length} total published stays</h4>
						<GenericList
							items={userStays}
							CmpToRender={StayPreview}
							classNames='stay-list-user clean-list'
							// sectionClassName='main-layout'
						/>
					</div>
				</div>
				{/* <div>
					<h2>Statistics</h2>
				</div> */}
			</section>
		)
	);
};
