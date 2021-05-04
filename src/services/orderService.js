import { asyncStorageService } from './asyncStorageService.js';
import { utilService } from './utilService.js';
import { storageService } from './storageService.js'
// import { httpService } from './httpService.js';

const KEY = 'orderDB';

export const orderService = {
	query,
	getById,
	remove,
	save,
};

_createOrders();

function query() {
	// return httpService.get(`/`);
	return asyncStorageService.query(KEY);
}

function getById(id) {
	// return httpService.get(`/${id}`);
	return asyncStorageService.get(KEY, id);
}

function remove(id) {
	// return httpService.delete(`/${id}`);
	return asyncStorageService.remove(KEY, id);
}

function save(order) {
	// if (order.id) {
	// 	return httpService.put(`/${order.id}`, order);
	// } else {
	// 	return httpService.post(`/`, order);
	// }
	const savedOrder = order._id
		? asyncStorageService.put(KEY, order)
		: asyncStorageService.post(KEY, order);

	return savedOrder;
}

function _createOrders() {
	let orders = storageService.load(KEY);
	if (!orders || !orders.length) {
		orders = [
			_createOrder('Ribeira Charming Duplex'),
			_createOrder('order2'),
			_createOrder('order3'),
		];
		storageService.store(KEY, orders);
	}
	return orders;
}

function _createOrder() {
	return {
		"_id": utilService.makeId(),
		"createdAt": 9898989,
		"buyer": {
			"_id": "u101",
			"fullname": "User 1"
		},
		"totalPrice": 160,
		"startDate": "2025/10/15",
		"endDate": "2025/10/17",
		"guests": {
			"adults": 2,
			"kids": 1
		},
		"order": {
			"_id": "h102",
			"name": "House Of Uncle My",
			"price": 80.00
		},
		"status": "pending"  
	}
} 