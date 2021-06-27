import { Bar } from 'react-chartjs-2';
import './StatusChart.scss'

export const StatusChart = ({ userOrders }) => {
    let statusData = [0, 0, 0]
    userOrders.forEach(order => {
        if (order.status === 'pending') statusData[0]++
        else if (order.status === 'confirmed') statusData[1]++
        else statusData[2]++
    });

    const data = {
        labels: ['Pending', 'Confirmed', 'Declined'],
        datasets: [
            {
                label: 'Status',
                data: statusData,
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
            <h4>Status</h4>
            <Bar data={data} options={options} />
        </section>
    )
}

