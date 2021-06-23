const INITIAL_STATE = {
	orders: [],
};

export function orderReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_ORDERS':
			return {
				...state,
				orders: action.orders,
			};
		case 'ADD_ORDER':
			return {
				...state,
				orders: [...state.orders, action.order],
			};
		case 'UPDATE_ORDER':
			const { updatedOrder } = action;
			return {
				...state,
				orders: state.orders.map((order) =>
					order._id === updatedOrder._id ? updatedOrder : order
				),
			};
		default:
			return state;
	}
}
