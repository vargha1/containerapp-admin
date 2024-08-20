import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const data: any = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
    datasets: [
        {
            label: 'Sales',
            data: [60, 110, 85, 120, 85, 135, 85, 70, 95, 85],
            backgroundColor: 'rgba(133, 244, 250, 1)',
            barThickness: 10,
            borderRadius: "8",
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Sales Data',
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 160, // حداکثر مقدار محور y را روی 160 تنظیم می‌کنیم
        },
    },
};
export const Chart2 = () => {
    return <Bar data={data} options={options} />;
}