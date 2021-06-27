export const utilService = {
	delay,
	getRandomInt,
	makeId,
	getDaysInMonth,
};

function delay(ms = 1500) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

function makeId(length = 5) {
	var txt = '';
	var possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (var i = 0; i < length; i++) {
		txt += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return txt;
}

function getDaysInMonth(m, y) { //Starting from 0
	switch (m) {
		case 1:
			return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
		case 8:
		case 3:
		case 5:
		case 10:
			return 30;
		default:
			return 31;
	}
}
