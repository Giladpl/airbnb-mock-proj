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
			_createOrder(),
			_createOrder(),
			_createOrder(),
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
		"startDate": "1444263347711",
		"endDate": "1624263347711",
		"guests": {
			"adults": 2,
			"children": 1,
			"infants": 0
		},
		"state": {
			"_id": "60af9047ae50cf20d2662ef1",
			"name": "Perfect apartment - just 20 minutes from Tel Aviv",
			"price": 45.0
		},
		"status": "pending"  
	}
} 