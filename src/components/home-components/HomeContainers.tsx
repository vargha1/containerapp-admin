import { SvgContainer } from "../../icons/SvgContainer";
import { Chart1 } from "./Chart1";

export const HomeContainers = () => {
    return (
        <>
            <h3 className="text-cont-50 relative -top-10">Containers</h3>
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

            </div>
        </>
    );
}
export default HomeContainers