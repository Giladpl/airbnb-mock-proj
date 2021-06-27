import { Doughnut } from 'react-chartjs-2'
import './ProfitsChart.scss'

export const ProfitsChart = ({ userOrders }) => {
    const profitsLabels = []
    const profitsData = []
    let totalProfits = 0
    userOrders.forEach(order => {
        if (order.status === 'confirmed') {
            profitsLabels.push(order.buyer.fullname)
            profitsData.push(order.totalPrice)
            totalProfits += order.totalPrice
        }
    });

    const data = {
        labels: profitsLabels,
        datasets: [
            {
                label: '# of Votes',
                data: profitsData,
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
    }

    return (
        userOrders && <section className='profits-chart'>
            <h4>Total Profits: ${totalProfits}</h4>
            <Doughnut data={data} width={50} height={50} />
        </section>
    )
}

