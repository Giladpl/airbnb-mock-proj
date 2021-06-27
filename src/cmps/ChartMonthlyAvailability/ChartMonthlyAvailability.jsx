import { Bar } from 'react-chartjs-2';
import { utilService } from '../../services/utilService';
import './ChartMonthlyAvailability.scss';

export const ChartMonthlyAvailability = ({ stayName, ordersByStay }) => {
	let reservedDaysByMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	ordersByStay.forEach((order) => {
		let fromDate = new Date(+order.startDate);
		let toDate = new Date(+order.endDate);
		let fromDateMonth = fromDate.getMonth();
		let toDateMonth = toDate.getMonth();
		let fromDateYear = fromDate.getFullYear();

		if (fromDateMonth === toDateMonth) {
			reservedDaysByMonth[fromDateMonth] +=
				toDate.getDate() - fromDate.getDate();
		} else if (fromDateMonth !== toDateMonth) {
			const daysInFromMonth =
				utilService.getDaysInMonth(fromDateMonth, fromDateYear) -
				fromDate.getDate() +
				1;

			reservedDaysByMonth[fromDateMonth] += daysInFromMonth;

			const daysInToMonth = toDate.getDate();
			reservedDaysByMonth[toDateMonth] += daysInToMonth;
		}
	});

	const data = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'Occupancy per Month',
				data: reservedDaysByMonth.map((daysOccupied, idx) =>
					(
						(daysOccupied * 100) /
						utilService.getDaysInMonth(idx, 2021)
					).toFixed(1)
				),
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<section className='card'>
			<h4>{stayName}</h4>
			<Bar data={data} options={options} />
		</section>
	);
};
