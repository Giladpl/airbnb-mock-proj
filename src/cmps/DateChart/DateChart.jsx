import { Line } from 'react-chartjs-2'
import './DateChart.scss'

export const DateChart = ({ userOrders }) => {    
    let dateOrders = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    userOrders.forEach(order => {
        let date = new Date(order.createdAt)
        let month = date.getMonth()
        dateOrders[month]++  
    });

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Number of orders per month',
                data: dateOrders,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
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
        <section>
            <Line data={data} options={options} />
        </section>
    )
}

