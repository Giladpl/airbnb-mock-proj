import axios from 'axios';
const API =
	'https://api.unsplash.com/search/photos?client_id=2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296&query=';

export const picService = {
	getPicture,
};

async function getPicture(term) {
	const { data } = await axios.get(API + term);
	if (!data.results.length) return null;
	return data.results[0].urls.regular;
}
