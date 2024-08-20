import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';



// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart1 = ({ className, displayLegend = false }: any) => {
    const data = {
        labels: ['75% Portion', '25% Portion'],
        datasets: [
            {
                label: 'Distribution',
                data: [80, 20],  // 75% and 25%
                backgroundColor: [
                    'rgba(58, 87, 232, 1)',  // Color for 75%
                    'rgba(233, 236, 239, 1)',  // Color for 25%
                ],
                borderColor: [
                    'rgba(58, 87, 232, 1)',
                    'rgba(233, 236, 239, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options: any = {
        responsive: false,
        plugins: {
            legend: {
                display: displayLegend,
                position: 'right',
            },
            tooltip: {
                enabled: true,
            },
        },
        cutout: "95%"
    };

    return <Doughnut data={data} options={options} className={className} />;
};