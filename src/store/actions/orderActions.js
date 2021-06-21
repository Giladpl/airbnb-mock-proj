import { orderService } from '../../services/orderService';

// export function loadOrders(filterBy) {
// 	return async (dispatch) => {
// 		const stays = await stayService.query(filterBy);
// 		const action = {
// 			type: 'SET_ORDERS',
// 			stays,
// 		};
// 		dispatch(action);
// 	};
// }

// export function getOrderById(stayId) {
// 	return async (dispatch) => {
// 		const order = await stayService.getById(stayId);
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
// 		await stayService.remove(stayId);
// 		dispatch({ type: 'REMOVE_ORDER', stayId });
// 	};
// }
