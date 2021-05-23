import { stayService } from '../../services/stayService';

export function loadStays(filterBy) {
	return async (dispatch) => {
		console.log(filterBy);
		const stays = await stayService.query(filterBy);
		// console.log(stays);
		const action = {
			type: 'SET_STAYS',
			stays,
		};
		dispatch(action);
	};
}

export function getStayById(stayId) {
	return async (dispatch) => {
		const stay = await stayService.getById(stayId);
		dispatch({ type: 'SET_STAY', stay });
		return stay;
	};
}

export function saveStay(stay) {
	return async (dispatch) => {
		const isAdd = !stay._id;
		const updatedStay = await stayService.save(stay);

		if (isAdd) dispatch({ type: 'ADD_STAY', stay: updatedStay });
		else dispatch({ type: 'UPDATE_STAY', updatedStay });
	};
}

export function removeStay(stayId) {
	return async (dispatch) => {
		await stayService.remove(stayId);
		dispatch({ type: 'REMOVE_STAY', stayId });
	};
}
