import NotFound from "../components/layout-components/NotFound";
import { SvgArrow } from "../icons/SvgArrow";
import { getLog } from "./auth/auth-components/Login";

export const Support = () => {
    const res = getLog()
    var isOpen = false;

    function handleFAQ(index: any) {
        const item = document.getElementById(`faqItem${index}`)
        const content = item?.nextElementSibling
        if (isOpen) {
            content?.classList.add("invisible")
            content?.classList.add("max-h-0")
            content?.classList.remove("max-h-[72px]")
            isOpen = false
        } else {
            content?.classList.remove("invisible")
            content?.classList.remove("max-h-0")
            content?.classList.add("max-h-[72px]")
            isOpen = true
        }
    }
    if (res == true) {
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
                            {
                                data.map((item, index) => (
                                    <div className="flex flex-col" key={index}>
                                        <div id={`faqItem${index + 1}`} className="flex items-center justify-between px-4 py-3 text-2xl bg-[#FBFCFE] shadow-[0_0px_10px_-5px] transition-all duration-300 mb-3" onClick={() => handleFAQ(index + 1)}>{item.title} <SvgArrow fillColor="#292D32" /></div>
                                        <div className="flex max-h-0 invisible overflow-hidden transition-all duration-300">{item.body}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div >
        )
    } else {
        return <NotFound />
    }
}
const data = [
    {
        title: "How do you make a simple FAQ?",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur at voluptatum natus quidem ipsum reiciendis minus officiis, vero, et cumque doloremque, impedit adipisci explicabo alias? Sunt aliquam quod, excepturi voluptatibus dolorum sequi. Nostrum expedita amet quia officiis magnam neque nesciunt? Ab sed repudiandae quasi quis ea esse libero temporibus."
    },
    {
        title: "How do you make a simple FAQ?",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur at voluptatum natus quidem ipsum reiciendis minus officiis, vero, et cumque doloremque, impedit adipisci explicabo alias? Sunt aliquam quod, excepturi voluptatibus dolorum sequi. Nostrum expedita amet quia officiis magnam neque nesciunt? Ab sed repudiandae quasi quis ea esse libero temporibus."
    },
    {
        title: "How do you make a simple FAQ?",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur at voluptatum natus quidem ipsum reiciendis minus officiis, vero, et cumque doloremque, impedit adipisci explicabo alias? Sunt aliquam quod, excepturi voluptatibus dolorum sequi. Nostrum expedita amet quia officiis magnam neque nesciunt? Ab sed repudiandae quasi quis ea esse libero temporibus."
    },
    {
        title: "How do you make a simple FAQ?",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequuntur at voluptatum natus quidem ipsum reiciendis minus officiis, vero, et cumque doloremque, impedit adipisci explicabo alias? Sunt aliquam quod, excepturi voluptatibus dolorum sequi. Nostrum expedita amet quia officiis magnam neque nesciunt? Ab sed repudiandae quasi quis ea esse libero temporibus."
    },
]
export default Support;