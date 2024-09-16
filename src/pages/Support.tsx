import { SvgArrow } from "../icons/SvgArrow";

export const Support = () => {
    return (
        <div className="flex flex-col items-center w-full px-5 mt-8 bg-[#f5f5f9]">
            <h1 className="flex w-full py-4 rounded-t-lg bg-[#F9FAFB] px-16 border-[#EAECF0] border-[1px]">Containers</h1>
            <div className="flex flex-col items-center w-full px-20 py-14 bg-cont-100">
                <a href="tel:12313" className="flex justify-center w-full mx-20 bg-[#03C088] rounded-md py-8 text-xl text-cont-100">
                    Start Chat
                </a>
                <h2 className="w-full text-2xl">How do you make a simple FAQ?</h2>
                <p className="text-[#3FBEDA] w-full text-xl mt-12 mb-4">FAQ</p>
                <div className="flex w-full">
                    <div className="flex flex-col w-[65%]" id="wrapper">
                        <div id="faqItem1" className="flex items-center justify-between px-4 py-3 text-2xl bg-[#FBFCFE] shadow-[0_0px_10px_-5px]  mb-3">How do you make a simple FAQ? <SvgArrow fillColor="#292D32" /></div>
                        <div className="flex h-0 invisible">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur at voluptatum natus quidem ipsum reiciendis minus officiis, vero, et cumque doloremque, impedit adipisci explicabo alias? Sunt aliquam quod, excepturi voluptatibus dolorum sequi. Nostrum expedita amet quia officiis magnam neque nesciunt? Ab sed repudiandae quasi quis ea esse libero temporibus.
                        </div>
                        <div id="faqItem2" className="flex items-center justify-between px-4 py-3 text-2xl bg-[#FBFCFE] shadow-[0_0px_10px_-5px]  mb-3">How do you make a simple FAQ? <SvgArrow fillColor="#292D32" /></div>
                        <div className="flex h-0 invisible">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur at voluptatum natus quidem ipsum reiciendis minus officiis, vero, et cumque doloremque, impedit adipisci explicabo alias? Sunt aliquam quod, excepturi voluptatibus dolorum sequi. Nostrum expedita amet quia officiis magnam neque nesciunt? Ab sed repudiandae quasi quis ea esse libero temporibus.
                        </div>
                        <div id="faqItem3" className="flex items-center justify-between px-4 py-3 text-2xl bg-[#FBFCFE] shadow-[0_0px_10px_-5px]  mb-3">How do you make a simple FAQ? <SvgArrow fillColor="#292D32" /></div>
                        <div className="flex h-0 invisible">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur at voluptatum natus quidem ipsum reiciendis minus officiis, vero, et cumque doloremque, impedit adipisci explicabo alias? Sunt aliquam quod, excepturi voluptatibus dolorum sequi. Nostrum expedita amet quia officiis magnam neque nesciunt? Ab sed repudiandae quasi quis ea esse libero temporibus.
                        </div>
                        <div id="faqItem4" className="flex items-center justify-between px-4 py-3 text-2xl bg-[#FBFCFE] shadow-[0_0px_10px_-5px]">How do you make a simple FAQ? <SvgArrow fillColor="#292D32" /></div>
                        <div className="flex h-0 invisible">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur at voluptatum natus quidem ipsum reiciendis minus officiis, vero, et cumque doloremque, impedit adipisci explicabo alias? Sunt aliquam quod, excepturi voluptatibus dolorum sequi. Nostrum expedita amet quia officiis magnam neque nesciunt? Ab sed repudiandae quasi quis ea esse libero temporibus.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Support;