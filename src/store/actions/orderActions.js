import { orderService } from '../../services/orderService';

export function loadOrders() {
	return async (dispatch) => {
		const orders = await orderService.query();
		dispatch({ type: 'SET_ORDERS', orders });
	};
}

// export function getOrderById(stayId) {
// 	return async (dispatch) => {
// 		const order = await orderService.getById(stayId);
// 		dispatch({ type: 'SET_ORDER', order });
// 		return order;
// 	};
// }

export function saveOrder(order) {
	return async (dispatch) => {
		const isAdd = !order._id;
		const updatedOrder = await orderService.save(order);

		if (isAdd) dispatch({ type: 'ADD_ORDER', order: updatedOrder });
		else dispatch({ type: 'UPDATE_ORDER', updatedOrder });
	};
}

// export function removeOrder(stayId) {
// 	return async (dispatch) => {
// 		await orderService.remove(stayId);
// 		dispatch({ type: 'REMOVE_ORDER', stayId });
// 	};
// }
