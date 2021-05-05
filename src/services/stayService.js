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
	const savedStay = stay._id
		? asyncStorageService.put(KEY, stay)
		: asyncStorageService.post(KEY, stay);

	return savedStay;
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

function _createStay(name) {
	return {
		"_id": utilService.makeId(),
		"name": name,
		"imgUrls": [
			"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
			"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
			"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
			"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
			"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
		],
		"price": 80.00,
		"summary": "Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube)...",
		"properties": {
			"accommodates": 8,
			"type": "1 bedroom",
			"bad": 1,
			"bath": 3,
		},
		"amenities": [
			"TV",
			"Wifi",
			"Kitchen",
			"Smoking allowed",
			"Pets allowed",
			"Cooking basics"
		],
		"host": {
			"_id": "51399391",
			"fullname": "Davit Pok",
			"imgUrl": "https://randomuser.me/api/portraits/men/21.jpg",
		},
		"loc": {
			"country": "Portugal",
			"countryCode": "PT",
			"address": "Porto, Portugal",
			"lat": -8.61308,
			"lng": 41.1413
		},
		"reviews": [
			{
				"id": utilService.makeId(),
				"txt": "Very helpful hosts. Cooked traditional...",
				"rate": 4,
				"createAt": 1620210973856,
				"by": {
					"_id": "u102",
					"fullname": "user2",
					"imgUrl": "https://randomuser.me/api/portraits/men/21.jpg"
				}
			}
		]
	}
}