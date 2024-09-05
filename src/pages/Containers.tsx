import { SvgContainer } from "../icons/SvgContainer"

export const Containers = () => {
    return (
        <div className="flex flex-col items-center w-full px-5 mt-8 bg-[#f5f5f9]">
            <h1 className="flex w-full py-4 rounded-t-lg bg-[#F9FAFB] px-16 border-[#EAECF0] border-[1px]">Containers</h1>
            <div className="flex flex-col items-center w-full bg-cont-100">
                <div className="flex items-center w-[90%] border-b-2 border-[#d9d9d9]">
                    <SvgContainer className="" fillColor="#757575" />
                    <div className="flex flex-col w-full p-12">
                        <div className="flex w-full h-[11px] rounded-full bg-[#d9d9d9]">
                            <div className="flex w-[60%] bg-[#3A57E8] rounded-full"></div>
                        </div>
                        <p className="text-[#141929] font-bold">60% Stock</p>
                    </div>
                </div>
                <div className="flex items-center w-[90%] border-b-2 border-[#d9d9d9]">
                    <SvgContainer className="" fillColor="#757575" />
                    <div className="flex flex-col w-full p-12">
                        <div className="flex w-full h-[11px] rounded-full bg-[#d9d9d9]">
                            <div className="flex w-[50%] bg-[#3A57E8] rounded-full"></div>
                        </div>
                        <p className="text-[#141929] font-bold">50% Stock</p>
                    </div>
                </div>
                <div className="flex items-center w-[90%] border-b-2 border-[#d9d9d9]">
                    <SvgContainer className="" fillColor="#757575" />
                    <div className="flex flex-col w-full p-12">
                        <div className="flex w-full h-[11px] rounded-full bg-[#d9d9d9]">
                            <div className="flex w-[40%] bg-[#3A57E8] rounded-full"></div>
                        </div>
                        <p className="text-[#141929] font-bold">40% Stock</p>
                    </div>
                </div>
                <div className="flex items-center w-[90%] border-b-2 border-[#d9d9d9]">
                    <SvgContainer className="" fillColor="#757575" />
                    <div className="flex flex-col w-full p-12">
                        <div className="flex w-full h-[11px] rounded-full bg-[#d9d9d9]">
                            <div className="flex w-[60%] bg-[#3A57E8] rounded-full"></div>
                        </div>
                        <p className="text-[#141929] font-bold">60% Stock</p>
                    </div>
                </div>
                <div className="flex items-center w-[90%] border-b-2 border-[#d9d9d9]">
                    <SvgContainer className="" fillColor="#757575" />
                    <div className="flex flex-col w-full p-12">
                        <div className="flex w-full h-[11px] rounded-full bg-[#d9d9d9]">
                            <div className="flex w-[90%] bg-[#3A57E8] rounded-full"></div>
                        </div>
                        <p className="text-[#141929] font-bold">90% Stock</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Containers;