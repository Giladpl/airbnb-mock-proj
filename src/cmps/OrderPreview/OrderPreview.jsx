import './OrderPreview.scss';

export const OrderPreview = ({ item: order, changeOrderStatus }) => {
	const guestsCount = () => {
		return Object.values(order.guests).reduce((total, num) => total + num, 0);
	};

	const totalPrice = order.totalPrice.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return (
		<li className='orderPreview'>
			<div className='orderPreview__left-side'>
				<p>By: {order.buyer.fullname}</p>
				{/* <p>Stay's name: {order.state.name}</p> */}
				<p>Status: {order.status}</p>
				<p className='orderPreview__guests-count'>
					Total persons: {guestsCount()} &ndash; Adults: {order.guests.adults} •
					Children: {order.guests.children} • Infants: {order.guests.infants}
				</p>
				<p>Total Price: {totalPrice}</p>
			</div>
			<div className='orderPreview__right-side'>
				<button onClick={() => changeOrderStatus(order._id, 'confirmed')}>
					Confirm
				</button>
				<button onClick={() => changeOrderStatus(order._id, 'declined')}>
					Decline
				</button>
			</div>
		</li>
	);
};
