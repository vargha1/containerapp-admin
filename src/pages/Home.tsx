import { useEffect, useState } from "react";
import { Chart1 } from "../components/home-components/Chart1"
import { Chart2 } from "../components/home-components/Chart2"
import HomeContainers from "../components/home-components/HomeContainers";
import { useLocation } from "react-router-dom";
import SuperHomeShops from "../components/home-components/SuperHomeShops";
import { getLog } from "./auth/auth-components/Login";

export const Home = () => {
    const res = getLog()
    const location = useLocation()
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    let targetNumber1 = 250; // Set target number for first counter
    let targetNumber2 = 15; // Set target number for second counter
    let targetNumber3 = 132; // Set target number for third counter
    let targetNumber4 = 7500; // Set target number for fourth counter

    if (location.pathname == "/sp/home") {
        targetNumber1 = 45000
        targetNumber2 = 13200
        targetNumber3 = 56
    }

    const startCounter = (setCount: any, targetNumber: number) => {
        const duration = 2000; // 1 second
        const interval = 10; // Update every 10 milliseconds
        const steps = duration / interval;
        const increment = targetNumber / steps;

        let currentCount = 0;
        const counterInterval = setInterval(() => {
            currentCount += increment;
            if (currentCount >= targetNumber) {
                currentCount = targetNumber;
                clearInterval(counterInterval);
            }
            setCount(Math.round(currentCount));
        }, interval);

        // Cleanup the interval on component unmount
        return () => clearInterval(counterInterval);
    };

    useEffect(() => startCounter(setCount1, targetNumber1), [targetNumber1]);
    useEffect(() => startCounter(setCount2, targetNumber2), [targetNumber2]);
    useEffect(() => startCounter(setCount3, targetNumber3), [targetNumber3]);
    useEffect(() => startCounter(setCount4, targetNumber4), [targetNumber4]);
    return (
        <div className='flex flex-col w-full items-center max-w-[1280px] h-full bg-[#f5f5f9]'>
            <div className="flex justify-center py-2 w-[90%] h-fit bg-cont-100 mt-10 rounded-lg">
                {res == "asdsadasdwq" ? (
                    <>
                        <div className="flex flex-col items-center md:text-4xl text-2xl font-bold w-1/4 px-6 py-2 border-e-2 border-[#eeeeee]">{count1}<span className="md:text-2xl text-lg font-normal text-cont-50">Total Loans</span></div>
                        <div className="flex flex-col items-center md:text-4xl text-2xl font-bold w-1/4 px-6 py-2 border-e-2 border-[#eeeeee]">{count2}<span className="md:text-2xl text-lg font-normal text-cont-50">Loans</span></div>
                        <div className="flex flex-col items-center md:text-4xl text-2xl font-bold w-1/4 px-6 py-2 border-e-2 border-[#eeeeee]">{count3}<span className="md:text-2xl text-lg font-normal text-cont-50">Containers</span></div>
                        <div className="flex flex-col items-center md:text-4xl text-2xl font-bold w-1/4 px-6 py-2">{count4}<span className="md:text-2xl text-lg font-normal text-cont-50">Clients</span></div>
                    </>
                ) : ""}
                {res == "shop" ? (
                    <>
                        <div className="flex flex-col items-center md:text-4xl text-2xl font-bold w-1/4 px-6 py-2 border-e-2 border-[#eeeeee]">{count1}<span className="md:text-2xl text-lg font-normal text-cont-50">Total Loans</span></div>
                        <div className="flex flex-col items-center md:text-4xl text-2xl font-bold w-1/4 px-6 py-2 border-e-2 border-[#eeeeee]">{count2}<span className="md:text-2xl text-lg font-normal text-cont-50">Total Containers</span></div>
                        <div className="flex flex-col items-center md:text-4xl text-2xl font-bold w-1/4 px-6 py-2">{count3}<span className="md:text-2xl text-lg font-normal text-cont-50">Total Shops</span></div>
                    </>
                ) : ""}
            </div>
            <div className="flex md:flex-row flex-col md:items-start items-center w-[90%] py-3 mt-4">
                <div className="flex flex-col p-5 md:w-2/5 w-full md:h-[366px] md:me-[54px] mb-10 md:mb-0 bg-cont-100 rounded-lg">
                    <h3 className="text-cont-50">Containers</h3>
                    <div className="w-[50%] flex items-center my-3">
                        <Chart1
                            className="!w-[200%] !h-auto"
                            displayLegend={true}
                        />
                    </div>
                </div>
                <div className="flex flex-col p-5 md:w-[calc(60%-54px)] w-full bg-cont-100 rounded-lg">
                    <div className="flex w-full px-5 justify-between">
                        <h3 className="font-bold text-xl">Loan</h3>
                        <button>This Week</button>
                    </div>
                    <div className="flex w-full md:h-auto h-[250px]">
                        <Chart2 />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-[90%] h-[250px] bg-cont-100 mt-5 mb-10 p-5 rounded-lg">
                {res == "asdsadasdwq" ? <HomeContainers /> : ""}
                {res == "shop" ? <SuperHomeShops /> : ""}
            </div>
        </div>
    )
}
export default Home;