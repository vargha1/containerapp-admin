import weeklyDataAPI from '../../api/weeklyData';
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
import { useEffect, useState } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

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
            // max: 160, // حداکثر مقدار محور y را روی 160 تنظیم می‌کنیم
        },
    },
};
export const Chart2 = () => {
    const [weeklyData, setWeeklyData] = useState<any>([])
    useEffect(() => {
        async function fetchCountries() {
            try {
                const response = await weeklyDataAPI.get("/api/v0/pack/containers/loans_by_weekday/", {
                    headers: {
                        "Authorization": `JWT ${localStorage.getItem("loginStatus")}`
                    }
                })
                setWeeklyData(response.data.loans_by_weekday)
            } catch (err: any) {
                if (err.response) {
                    if (err.response.status == 403) {

                    }
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }
        fetchCountries()
    }, [])
    const data: any = {
        labels: ['S', 'S', 'M', 'T', 'W', 'T', 'F'],
        datasets: [
            {
                label: 'Sales',
                data: [weeklyData.Saturday, weeklyData.Sunday, weeklyData.Monday, weeklyData.Tuesday, weeklyData.Wednesday, weeklyData.Thursday, weeklyData.Friday],
                backgroundColor: 'rgba(133, 244, 250, 1)',
                barThickness: 10,
                borderRadius: "8",
            },
        ],
    };

    return <Bar data={data} options={options} />;
}