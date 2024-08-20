import { Chart1 } from "../components/home-components/Chart1"
import { Chart2 } from "../components/home-components/Chart2"
import { SvgContainer } from "../icons/SvgContainer"

export const Home = () => {
    return (
        <div className='flex flex-col w-full items-center max-w-[1280px] h-full bg-[#f5f5f9]'>
            <div className="flex py-2 w-[90%] h-fit bg-cont-100 mt-10 rounded-lg">
                <div className="flex flex-col items-center text-4xl font-bold w-1/4 px-6 py-2 border-e-2 border-[#eeeeee]">250<span className="text-2xl font-normal text-cont-50">Total Loans</span></div>
                <div className="flex flex-col items-center text-4xl font-bold w-1/4 px-6 py-2 border-e-2 border-[#eeeeee]">15<span className="text-2xl font-normal text-cont-50">Loans</span></div>
                <div className="flex flex-col items-center text-4xl font-bold w-1/4 px-6 py-2 border-e-2 border-[#eeeeee]">132<span className="text-2xl font-normal text-cont-50">Containers</span></div>
                <div className="flex flex-col items-center text-4xl font-bold w-1/4 px-6 py-2">7500<span className="text-2xl font-normal text-cont-50">Clients</span></div>
            </div>
            <div className="flex w-[90%] py-3 h-fit mt-4">
                <div className="flex flex-col p-5 w-2/5 me-[54px] bg-cont-100">
                    <h3 className="text-cont-50">Containers</h3>
                    <div className="w-[50%] flex items-center my-3">
                        <Chart1
                            className="!w-[200%] !h-auto"
                            displayLegend={true}
                        />
                    </div>
                </div>
                <div className="flex flex-col p-5 w-[calc(60%-54px)] bg-cont-100">
                    <div className="flex w-full px-5 justify-between">
                        <h3 className="font-bold text-xl">Loan</h3>
                        <button>This Week</button>
                    </div>
                    <div className="flex w-full">
                        <Chart2 />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center w-[90%] h-[250px] bg-cont-100 mt-5 p-5 ">
                <h3 className="text-cont-50">Containers</h3>
                <div className="flex w-full relative">
                    <Chart1 className="!w-[18%] !h-auto" />
                    <SvgContainer className="absolute left-[6.2%] top-4 w-[6%]" fillColor="#757575" />
                    <Chart1 className="!w-[18%] !h-auto" />
                    <SvgContainer className="absolute left-[24.2%] top-4 w-[6%]" fillColor="#757575" />
                    <Chart1 className="!w-[18%] !h-auto" />
                    <SvgContainer className="absolute left-[42.2%] top-4 w-[6%]" fillColor="#757575" />
                    <Chart1 className="!w-[18%] !h-auto" />
                    <SvgContainer className="absolute left-[60.2%] top-4 w-[6%]" fillColor="#757575" />
                    <Chart1 className="!w-[18%] !h-auto" />
                    <SvgContainer className="absolute left-[78.2%] top-4 w-[6%]" fillColor="#757575" />
                    <div className="flex justify-center items-center bg-[#363740] w-[75px] h-[75px] rounded-full bottom-8 right-8 fixed">
                        <div className="flex justify-center items-center absolute bg-white w-[20px] h-[20px] right-1 top-0 rounded-full" id="addBtn">+</div>
                        <SvgContainer className="w-3/5 h-3/5" fillColor="white" />
                    </div>
                </div>
            </div>
        </div>
    )
}