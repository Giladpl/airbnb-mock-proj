import { asyncStorageService } from './asyncStorageService.js';
import { utilService } from './utilService.js';
import { storageService } from './storageService.js'
// import { httpService } from './httpService.js';

const KEY = 'stayDB';

export const stayService = {
	query,
	getById,
	remove,
	save,
	getEmptyStay,
};

_createStays();

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

function save(stay) {
	// if (stay.id) {
	// 	return httpService.put(`/${stay.id}`, stay);
	// } else {
	// 	return httpService.post(`/`, stay);
	// }
	const savedStream = stay._id
		? asyncStorageService.put(KEY, stay)
		: asyncStorageService.post(KEY, stay);

	return savedStream;
}

function getEmptyTrip() {
	return {
		'startDate': '',
		'endDate': '',
		'guests': {
			'adults': null,
			'kids': null
		},
		'loc': {
			'country': '',
			'countryCode': '',
			'address': '',
			'lat': null,
			'lng': null
		}
	}
}

function getEmptyStay(title = '', description = '') {
	return {
		title,
		description,
		createdAt: Date.now(),
	};
}

function _createStays() {
	let stays = storageService.load(KEY);
	if (!stays || !stays.length) {
		stays = [
			_createStay('Ribeira Charming Duplex'),
			_createStay('stay2'),
			_createStay('stay3'),
		];
		storageService.store(KEY, stays);
	}
	return stays;
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
		"stay": {
			"_id": "h102",
			"name": "House Of Uncle My",
			"price": 80.00
		},
		"status": "pending"
		// 	  }    
	}

	// 	"order": [
	// 	  {
	// 		"_id": "o1225",
	// 		"createdAt": 9898989,
	// 		"buyer": {
	// 		  "_id": "u101",
	// 		  "fullname": "User 1"
	// 		},
	// 		"totalPrice": 160,
	// 		"startDate": "2025/10/15",
	// 		"endDate": "2025/10/17",
	// 		"guests": {
	// 		  "adults": 2,
	// 		  "kids": 1
	// 		},
	// 		"stay": {
	// 		  "_id": "h102",
	// 		  "name": "House Of Uncle My",
	// 		  "price": 80.00
	// 		},
	// 		"status": "pending"
	// 	  }    
	// 	] 