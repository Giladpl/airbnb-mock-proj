import { asyncStorageService } from './asyncStorageService.js';
import { utilService } from './utilService.js';
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

function getEmptyStream(title = '', description = '') {
	return {
		title,
		description,
		createdAt: Date.now(),
	};
}

function _createStreams() {
	let stays = storageService.load(KEY);
	if (!stays || !stays.length) {
		stays = [
			_createStream('stay1'),
			_createStream('stay2'),
			_createStream('stay3'),
		];
		storageService.store(KEY, stays);
	}
	return stays;
}

function _createStream(name) {
	let stay = getEmptyStream(name);
	stay._id = utilService.makeId();
	return stay;
}
