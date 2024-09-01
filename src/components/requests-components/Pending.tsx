import { useState } from "react"
export const Pending = () => {
    let [pendingList, setPendingList] = useState([
        [
            { requestDate: "August 19" },
            {
                id: 1,
                name: "VR1",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 2,
                name: "VR2",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 3,
                name: "VR3",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 4,
                name: "VR4",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 5,
                name: "VR5",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
        ],
        [
            { requestDate: "August 7" },
            {
                id: 1,
                name: "VR1",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 2,
                name: "VR2",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 3,
                name: "VR3",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 4,
                name: "VR4",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 5,
                name: "VR5",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
        ],
        [
            { requestDate: "September 4" },
            {
                id: 6,
                name: "VR6",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 7,
                name: "VR7",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 8,
                name: "VR8",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 9,
                name: "VR9",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 10,
                name: "VR10",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
        ],
        [
            { requestDate: "August 19" },
            {
                id: 11,
                name: "VR11",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 12,
                name: "VR12",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 13,
                name: "VR13",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 14,
                name: "VR14",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 15,
                name: "VR15",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
        ],
        [
            { requestDate: "August 19" },
            {
                id: 16,
                name: "VR16",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 17,
                name: "VR17",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 18,
                name: "VR18",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 19,
                name: "VR19",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 20,
                name: "VR20",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
        ],
        [
            { requestDate: "August 19" },
            {
                id: 21,
                name: "VR21",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 22,
                name: "VR22",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 23,
                name: "VR23",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 24,
                name: "VR24",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
            {
                id: 25,
                name: "VR25",
                imgSrc: "/assets/bag-happy1.png",
                Qty: 0,
            },
        ],
    ])
    return (
        <>
            <div className='w-[90%] h-[100svh] flex flex-wrap pt-8'>
                {pendingList.map((list, index) => {
                    return (<div className="flex flex-col xl:w-[calc(25%-20px)] w-[calc(33.3333%-20px)] me-5 mb-5 rounded-xl bg-cont-100" key={index}>
                        <div className="flex w-full ps-5 py-3 bg-cont-150 rounded-t-3xl">
                            <p className="text-white text-xl">{list[0].requestDate}</p>
                        </div>
                        {list.map((item, index) => {
                            if (index != 0) {
                                return (
                                    <div className="flex items-center w-full py-1 ps-5" key={index}>
                                        <img src={item.imgSrc} className="w-[32px] h-[32px]" alt="" />
                                        <p className="text-3xl rotate-45">+</p>
                                        <h3 className="text-3xl">{item.Qty}</h3>
                                    </div>
                                )
                            }
                        })}
                        <div className="flex justify-center py-3 bg-cont-150 rounded-b-3xl">
                            <p className="text-2xl text-cont-100">Pending</p>
                        </div>
                    </div>)
                })}
            </div>
        </>
    )
}
export default Pending