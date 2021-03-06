import { useDispatch, useSelector } from 'react-redux';
import { saveOrder } from '../../store/actions/orderActions';
import { removeStay } from '../../store/actions/stayActions';
import { StayPreview } from '../../cmps/StayPreview';
import { OrderPreview } from '../../cmps/OrderPreview';
import { GenericList } from '../../cmps/GenericList';
import { Link, useHistory } from 'react-router-dom';
import { ProfitsChart } from '../../cmps/ProfitsChart';
import './UserDetails.scss';
import React from 'react';

export const UserDetails = (props) => {
	const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
	const stays = useSelector((state) => state.stayReducer.stays);
	const orders = useSelector((state) => state.orderReducer.orders);

	const history = useHistory();
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

	const removeHandler = (ev, stayId) => {
		ev.preventDefault();
		ev.stopPropagation();
		dispatch(removeStay(stayId));
	};

	const editHandler = (ev, stayId = '') => {
		ev.preventDefault();
		ev.stopPropagation();
		history.push('/stay/edit/' + stayId);
	};

	return (
		loggedinUser && (
			<section className='user-details main-layout flex-column'>
				<div className='user-details-header flex-between'>
					<div className='name-pic-box flex-center'>
						<img className='user-img' src={loggedinUser.imgUrl} alt='' />
						<div>{loggedinUser.fullname}</div>
					</div>
					<div className='back-link'>
						<Link to='/'>Back</Link>
					</div>
				</div>
				<div className='orders-statistics-box grid'>
					<div className='orders-list'>
						<h2>Orders</h2>
						<h4>{pendingOrdersNum} new pending orders</h4>
						<GenericList
							items={userOrders}
							CmpToRender={OrderPreview}
							classNames='order-list clean-list'
							changeOrderStatus={changeOrderStatus}
						/>
					</div>
					<div className='statistics'>
						<h2>Statistics</h2>
						<Link to='/statistics'>
							<h4 className='more-btn'>For more</h4>
						</Link>
						<ProfitsChart userOrders={userOrders} />
					</div>
				</div>
				<div className='stays-list'>
					<h2>Stays</h2>
					<h4>{userStays.length} total published stays</h4>
					<GenericList
						items={userStays}
						CmpToRender={StayPreview}
						classNames='stay-list-user clean-list'
						removeHandler={removeHandler}
						editHandler={editHandler}
					></GenericList>
					<button className='main-btn' onClick={(ev) => editHandler(ev)}>Add New</button>
				</div>
			</section>
		)
	);
};
