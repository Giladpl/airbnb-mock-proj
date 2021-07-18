import { asyncStorageService } from './asyncStorageService.js';
import { utilService } from './utilService.js';
import { storageService } from './storageService.js'
import { httpService } from './httpService.js';

// const KEY = 'orderDB';

export const orderService = {
	query,
	getById,
	remove,
	save,
	getEmptyOrder
};

// _createOrders();

function query() {
	return httpService.get(`order/`);
	// return asyncStorageService.query(KEY);
}

function getById(id) {
	return httpService.get(`order/${id}`);
	// return asyncStorageService.get(KEY, id);
}

function remove(id) {
	return httpService.delete(`order/${id}`);
	// return asyncStorageService.remove(KEY, id);
}

function save(order) {
	if (order._id) {
		return httpService.put(`order/${order.id}`, order);
	} else {
		return httpService.post(`order/`, order);
	}
	// const savedOrder = order._id
	// 	? asyncStorageService.put(KEY, order)
	// 	: asyncStorageService.post(KEY, order);

	// return savedOrder;
}

function getEmptyOrder() {
	return {
		'createdAt': Date.now(),
		'buyer': {
			'_id': '',
			'fullname': ''
		},
		'totalPrice': null,
		'startDate': '',
		'endDate': '',
		'guests': {
			'adults': null,
			'children': null,
			'infants': null
		},
		'state': {
			'_id': '',
			'name': '',
			'hostId': ''
		},
		'status': 'pending' 
	}
}

// function _createOrders() {
// 	let orders = storageService.load(KEY);
// 	if (!orders || !orders.length) {
// 		orders = [
// 			_createOrder(),
// 			_createOrder(),
// 			_createOrder(),
// 		];
// 		storageService.store(KEY, orders);
// 	}
// 	return orders;
// }

// function _createOrder() {
// 	return {
// 		"_id": utilService.makeId(),
// 		"createdAt": 9898989,
// 		"buyer": {
// 			"_id": "u101",
// 			"fullname": "User 1"
// 		},
// 		"totalPrice": 160,
// 		"startDate": "1611575551000",
// 		"endDate": "1612525951000",
// 		"guests": {
// 			"adults": 2,
// 			"children": 1,
// 			"infants": 0
// 		},
// 		"state": {
// 			"_id": "60af9047ae50cf20d2662ef1",
// 			"name": "Perfect apartment - just 20 minutes from Tel Aviv",
// 			"price": 45.0,
// 			"hostId": "60cf12374d2880007cb1728d"
// 		},
// 		"status": "pending"  
// 	}
// } 